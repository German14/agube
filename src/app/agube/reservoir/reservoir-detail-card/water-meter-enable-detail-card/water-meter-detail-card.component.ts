import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReservoirService, WaterMeter } from "@availa/agube-rest-api";
import { AgubeRoute } from "src/app/agube/agube-route";

@Component({
  selector: "app-water-mater-detail-card",
  templateUrl: "./water-meter-detail-card.component.html",
  styleUrls: ["./water-meter-detail-card.component.scss"],
})
export class WaterMeterDetailCardComponent implements OnInit, OnChanges {
  @Input() public reservoirId: number;
  public waterMeter: WaterMeter;

  constructor(
    private readonly svcReservoir: ReservoirService,
    private readonly svcRouter: Router
  ) {
    this.waterMeter = {
      code: "",
    };
  }

  public ngOnInit(): void {
    this.svcReservoir
      .getCurrentReservoirWaterMeter(+this.reservoirId)
      .subscribe((result) => {
        this.waterMeter = result;
      });
  }

  public ngOnChanges(): void {
    this.ngOnInit();
  }

  public changeReservoir(): void {
    this.svcRouter.navigate([AgubeRoute.CHANGE_RESERVOIR], {
      queryParams: { data: this.reservoirId },
    });
  }
}
