import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Package } from '../../models/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  requestedPackage;

  public package: Package;

  constructor(
    private routeParam: ActivatedRoute,
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.requestedPackage = this.routeParam.snapshot.paramMap.get('search');

    this.dataService.getPackage(this.requestedPackage).subscribe(result => {
     this.package = result;  

    }, err => {
      console.log(err);
    })

  }


  getNpmPage() {
    window.location.href = 'https://www.npmjs.com/package/' + this.package._id;
  }




}
