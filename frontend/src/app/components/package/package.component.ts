import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.requestedPackage = this.routeParam.snapshot.paramMap.get('search');

    this.dataService.getPackage(this.requestedPackage).subscribe(result => {
     this.package = result;  
     console.log(this.package);
    }, err => {
      console.log(err);
    })
  }
}
