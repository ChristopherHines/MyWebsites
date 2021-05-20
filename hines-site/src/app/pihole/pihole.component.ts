import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pihole",
  templateUrl: "./pihole.component.html",
  styleUrls: ["./pihole.component.css"],
})
export class PiholeComponent implements OnInit {
  pihole_walkthrough = "To start, install pihole to your raspberry pi.";

  constructor() {}
  ngOnInit(): void {}

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
