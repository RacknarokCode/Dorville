import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
search=false;
  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  // about() {
  //   this.router.navigate(['about']);
  // }
  // services() {
  //   this.router.navigate(['notices']);
  // }
  // artists() {
  //   this.router.navigate(['artists']);
  // }
  // hiring() {
  //   this.router.navigate(['hiring']);
  // }
  // contact() {
  //   this.router.navigate(['contact']);
  // }
}
