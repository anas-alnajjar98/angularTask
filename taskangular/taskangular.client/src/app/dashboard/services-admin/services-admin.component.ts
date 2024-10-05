import { Component } from '@angular/core';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrl: './services-admin.component.css'
})
export class ServicesAdminComponent {
  ngOnInit() {
    this.getServicesAdmin()
  }
  constructor(private servicesURLService: UrlService) { }

  arrayOfData: any

  getServicesAdmin() {
    this.servicesURLService.GetAllServices().subscribe((data) => {
      this.arrayOfData = data
      console.log("this.arrayOfData", this.arrayOfData)
    })
  }
}
