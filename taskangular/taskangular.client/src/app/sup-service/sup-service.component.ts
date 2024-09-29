import { Component } from '@angular/core';
import { UrlService } from '../url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sup-service',
  templateUrl: './sup-service.component.html',
  styleUrl: './sup-service.component.css'
})
export class SupServiceComponent {
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");

    this.getSubServices(this.parameter)
  }
  constructor(private servicesURLService: UrlService, private _route: ActivatedRoute) { }

  parameter: any
  arrayOfData: any

  getSubServices(id: number) {
    this.servicesURLService.GetSubServicesByServiceId(id).subscribe((data) => {
      this.arrayOfData = data
      console.log("this.arrayOfData", this.arrayOfData)
    })
  }
}
