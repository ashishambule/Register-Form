import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public checkFlag;
  constructor(
    private router: Router,
    public navCtrl: NgxNavigationWithDataComponent
  ) {
    this.checkFlag = this.navCtrl.get('isChecked');
    console.log(this.checkFlag);
  }
  logOf = () => {
    console.log('logof');

    this.router.navigate(['']);
  };
  ngOnInit(): void {}
}
