import { Component } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  ngOnInit() {
    this.getServices()
  }
  constructor(private servicesURLService: UrlService) {
  }

  arrayOfData: any

  getServices() {
    this.servicesURLService.GetAllServices().subscribe((data) => {
      this.arrayOfData = data
      console.log("this.arrayOfData", this.arrayOfData)
    })
  }
}
