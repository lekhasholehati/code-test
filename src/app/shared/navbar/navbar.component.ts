import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router       : Router,
    private route        : ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
