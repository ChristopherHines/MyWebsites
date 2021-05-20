import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  otherPages = [
    {
      title: "Bill Tracker",
      subtitle: "Bills month over month",
      image: "chart-image",
    },
    {
      title: "Pi Hole",
      subtitle: "Setup walkthrough",
      image: "pihole-image",
    },
    {
      title: "Pi VPN",
      subtitle: "Setup Walkthrough",
      image: "pivpn-image",
    },
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
