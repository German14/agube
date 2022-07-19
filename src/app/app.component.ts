import { Component } from '@angular/core';
import { UserService } from '@availa/agube-rest-api';
import { AccountService } from '@availa/auth-fe';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Language } from './utils/language';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public languages: Language[] = [
        {
            code: 'ga',
            description: 'LENGUAGE.GALICIAN',
            flagLink: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg',
        },
        {
            code: 'es',
            description: 'LENGUAGE.SPANISH',
            flagLink: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg',
        },
        {
            code: 'en',
            description: 'LENGUAGE.ENGLISH',
            flagLink: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
        },
    ];

    public selectedLanguage: Language = this.languages[1];

    constructor(private translate: TranslateService, private svcAccount: AccountService, private svcUser: UserService) {
        this.selectLanguage(this.selectedLanguage);
        this.svcAccount.getUser().subscribe((userResponse) => {
            if (!userResponse) {
                return;
            }

            this.svcUser.getConfig(userResponse.user_id!).subscribe((response) => {
                this.selectedLanguage = this.languages.filter((lang) => lang.code === response.lang)[0];
                this.selectLanguage(this.selectedLanguage);
            });
        });
    }

    public selectLanguage(language: Language) {
        this.selectedLanguage = language;
        this.translate.setDefaultLang(language.code);
        this.translate.use(language.code);
    }
}
