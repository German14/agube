import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, AuthRoute } from '@availa/auth-fe';
import { SubscriptionModule, SubscriptionRoute } from '@availa/subscription-fe';
import { SidebarRoute } from './page/home/sidebar-route';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgubeApiModule } from '@availa/agube-rest-api';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SubscriptionModule.forRoot({
      loginUrl: AuthRoute.ENABLE_ACCOUNT,
      subscriptionRestconfig: {
        basePath: environment.subscriptionBackendUrl,
      },
    }),
    AuthModule.forRoot({
      authRestconfig: {
        basePath: environment.authBackendUrl,
      },
      afterLoginSuccessUrl: SidebarRoute.MANAGER,
      createAccountUrl: SubscriptionRoute.SUBSCRIPTION,
    }),
    AgubeApiModule.forRoot({
      basePath: environment.agubeBackendUrl,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
