import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input()
  appLogo: string;

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }


}
