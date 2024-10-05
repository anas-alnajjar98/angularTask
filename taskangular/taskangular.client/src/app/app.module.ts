import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SupServiceComponent } from './sup-service/sup-service.component';
import { RouterModule } from '@angular/router';
import { AddServicesComponent } from './add-services/add-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubServiceDeatailsComponent } from './sub-service-deatails/sub-service-deatails.component';
import { ServicesAdminComponent } from './dashboard/services-admin/services-admin.component';
import { UpdateServiceComponent } from './dashboard/update-service/update-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    SupServiceComponent,
    AddServicesComponent,
    DashboardComponent,
    LoginUserComponent,
    RegistrationUserComponent,
    SubscriptionComponent,
    SubServiceDeatailsComponent,
    ServicesAdminComponent,
    UpdateServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServiceComponent },
      { path: "subservices/:id", component: SupServiceComponent },
      { path: "subservicedetails/:id", component: SubServiceDeatailsComponent },
      { path: "subscription/:id", component: SubscriptionComponent },
      { path: "register", component: RegistrationUserComponent },
      { path: "login", component: LoginUserComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "", component: ServicesAdminComponent },
          { path: "servicesAdmin", component: ServicesAdminComponent },
          { path: "addService", component: AddServicesComponent },
          { path: "updateService/:id", component: UpdateServiceComponent },

        ]
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
