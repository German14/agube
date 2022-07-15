import { GoogleAnalyticsService } from 'ngx-google-analytics';
import {
    DwellingService,
    DwellingCreate,
    Geolocation,
    ManagerService,
    GeolocationService,
} from '@availa/agube-rest-api';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigureView } from 'src/app/components/map/view/map-location';
import { ConfigureMap } from '../../../components/map/map/configure-map';
import { Router, ActivatedRoute } from '@angular/router';
import { Type } from '../../water-meter/detail/type';
import { WaterMeterType } from '../../water-meter/water-meter-type.enum';
import { WaterMeterPersistantService } from '../../water-meter/water-meter-persistant.service';
import { Detail } from './detail';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogParameters } from 'src/app/components/dialog/dialog-parameter';
import { NotificationService } from '@availa/notification';
import { DwellingCacheService } from 'src/app/utils/cache/dwelling-cache.service';

@Component({
    selector: 'app-page-dwelling-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    public dwellingId: number | undefined;
    public dwelling: DwellingCreate | undefined;

    // map
    public configureView: ConfigureView | undefined;
    public configureMap: ConfigureMap | undefined;

    // map config
    public mode: string = 'map';
    private mapZoomDefault: number = 15;
    private mapStreetViewPositionDegree: number = 0;
    private mapHeight: string = '500px';
    private mapId: string = 'detail_map';
    public waterMeterId: number | undefined;

    public type: Type | undefined = undefined;

    public showMap: boolean = true;

    public loading: boolean = false;

    public canLoad: boolean = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private svcDwelling: DwellingService,
        private svcManager: ManagerService,
        private svcPersistant: WaterMeterPersistantService,
        private svcGeolocation: GeolocationService,
        private svcNotification: NotificationService,
        public dialog: MatDialog,

        private googleAnalyticsService: GoogleAnalyticsService
    ) {
        this.googleAnalyticsService.pageView('view_dwelling', '/detail_dwelling');
        this.svcManager.userIsManager().subscribe((response) => (this.canLoad = response.is_manager));
        this.loading = true;
        this.dwelling = undefined;
        this.activatedRoute.queryParams.subscribe((params) => {
            let par = params as Detail;
            this.dwellingId = par.dwellingId;
            this.type = {
                id: par.dwellingId,
                type: WaterMeterType.DWELLING,
            };
        });
    }

    ngOnInit(): void {
        this.svcPersistant.get().subscribe((res) => {
            this.waterMeterId = res?.id!;
        });
        if (!this.dwellingId) {
            return;
        }

        this.svcDwelling.getDwelling(this.dwellingId).subscribe({
            next: (dwelling) => {
                this.dwelling = dwelling;
                let geolocation = this.dwelling.geolocation;
                this.configureMaps(geolocation);
                this.loading = false;
            },
            error: (error) => (this.loading = false),
        });

        this.svcDwelling.getCurrentDwellingWaterMeter(this.dwellingId).subscribe((response) => {
            this.waterMeterId = response.id;
            this.svcPersistant.emit(response);
        });
    }

    public goToNewDwelling() {
        this.router.navigate(['manager/dwellings/create']);
    }

    public goToEditGeolocation() {
        if (!this.dwelling) {
            return;
        }

        this.showMap = false;

        const geolocation = this.dwelling.geolocation;

        let data: DialogParameters = {
            dialogTitle: 'PAGE.CONFIG.CLIENT.CONTACT-INFO.ADDRESS.EDIT-DIALOG.TITLE',
            geolocation: geolocation,
            configureMap: {
                id: this.mapId,
                center: {
                    lat: geolocation.latitude,
                    lon: geolocation.longitude,
                },
                zoom: geolocation.zoom,
                showCircle: true,
                height: '300px',
                dragging: false,
                selectOptionFilter: true,
            },
        };

        const dialogRef = this.dialog.open(DialogComponent, {
            width: '100%',
            data,
        });

        dialogRef.componentInstance.submitClicked.subscribe((result: Geolocation | undefined) => {
            if (result) {
                this.updateGeolocation(result);
            } else {
                this.showMap = true;
            }
        });
    }

    public updateGeolocation(result: Geolocation) {
        if (!this.dwelling) {
            return;
        }

        this.svcGeolocation.updateGeolocation(result.id!, result).subscribe({
            next: (response) => {
                this.dwelling!.geolocation = response;
                this.configureMaps(response);
                this.showMap = true;
                this.googleAnalyticsService.gtag('event', 'update_address', {
                    city: response.address.city,
                    street: response.address?.road,
                    latitude: response.latitude,
                    longitude: response.longitude,
                    zoom: response.zoom,
                    horizontal_degree: response?.horizontal_degree,
                    vertical_degree: response?.vertical_degree,
                    number: response?.number,
                    flat: response?.flat,
                    gate: response?.gate,
                });
            },
            error: (error) => {
                this.svcNotification.warning({ message: error.error });
                this.googleAnalyticsService.exception('error_address_update', true);
            },
        });
    }

    private configureMaps(geolocation: Geolocation) {
        this.configureMap = {
            id: this.mapId,
            center: {
                lat: geolocation.latitude,
                lon: geolocation.longitude,
            },
            zoom: geolocation.zoom,
            showCircle: true,
            height: this.mapHeight,
            dragging: false,
        };
        this.configureView = {
            latitude: +geolocation.latitude,
            longitude: +geolocation.longitude,
            zoom: this.mapZoomDefault,
            horizontalDegree: this.mapStreetViewPositionDegree,
            verticalDegree: this.mapStreetViewPositionDegree,
            height: this.mapHeight,
        };
    }
}
