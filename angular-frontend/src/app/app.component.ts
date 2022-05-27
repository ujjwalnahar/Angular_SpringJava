import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Smartphone } from './smartphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-httpclient';

  smartphone: Smartphone[] = [];
  // smartphone: any = [];
  headers: any;
  spresp: any;
  postdata: Smartphone;
  msg:String;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getGreeting();
  }

  // Get full response

  // getSmartphones() {
  //   this.api.getSmartphone()
  //   .subscribe(resp => {
  //     console.log(resp);
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map((key: any) =>
  //       `${key}: ${resp.headers.get(key)}`);

  //     for (const data of resp.body) {
  //       this.smartphone.push(data);
  //     }
  //     console.log(this.smartphone);
  //   });
  // }

  // Get specific fields response

  // getSmartphones() {
  //   this.api.getSmartphone()
  //     .subscribe(data => {
  //       console.log(data);
  //       for (const d of (data as any)) {
  //         this.smartphone.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       console.log(this.smartphone);
  //     });
  // }

  getGreeting(){
    this.api.getGreeting()
    .subscribe(data=> {
      console.log(data);
      this.msg=data.message
    });
  }
}
