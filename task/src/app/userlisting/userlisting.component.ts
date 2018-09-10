import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent implements OnInit {
  usersArr:any = [];

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8500/allUsers")
    .subscribe((res) => {
      this.usersArr = res["results"];
    });
  }

  deleteUser(id:string, idx:number) {
    this.httpClient.post("http://localhost:8500/deleteUser", { "id" : id } )
    .subscribe((res) => {
      console.log(res);
      if (res["results"]["ok"] == 1) {
        this.usersArr.splice(idx, 1);
      }
    });
  }

}
