import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  introHeight: any;
  piHeight: any;

  constructor() { }

  ngOnInit(): void {

    // add heigh dynamicaly to all .portfolio-item
    $( '.portfolio-item' ).each(function( index ) {
      const portfolioItem = $(this);
      this.piHeight = portfolioItem.width();
      portfolioItem.css('height', this.piHeight);
    });

    // add height dynamicaly to .portfolio-intro
    const portfolioIntro = $( '.portfolio-item.__wide');
    this.introHeight = portfolioIntro.width() / 2;

    // set the init min-height css of portfolio-area for section
    $('.portfolios-area').css('minHeight', this.introHeight);

    if ($(window).width() > 768) {
      portfolioIntro.css('height', this.introHeight);
    }

    if ($(window).width() > 972) {
      this.setForDesktop();
    }

    if ($(window).width() <= 972) {
      this.setForSmaller();
    }
  }

  ngAfterViewInit() {
    $(window).on('resize', () => {
      // add height dynamicaly to .portfolio-intro
      const portfolioIntro = $( '.portfolio-item.__wide');
      this.introHeight = portfolioIntro.width() / 2;

      portfolioIntro.css('height', this.introHeight);

      // set the min-height and height css of portfolio-area for section
      $('.portfolios-area').css('minHeight', this.introHeight);

      $( '.portfolio-item' ).each(function( index ) {
        const portfolioItem = $(this);
        this.piHeight = portfolioItem.width();
        $( '.portfolio-item.__wide').css('height', this.piHeight);
        portfolioItem.css('height', this.piHeight);
        portfolioItem.css('transition-delay', '0ms');
        });

      if ($(window).width() > 972) {
        this.setForDesktop();
      }

      if ($(window).width() <= 972) {
        this.setForSmaller();
      }
    });
  }

  setForDesktop() {
    // set the height css of portfolio-area for section
    $('.portfolios-area').css('height', (this.introHeight * 4) + this.introHeight);
    // set the init position css of portofolio-item
    $( '.portfolio-item' ).css('position', 'absolute');
    $( '.portfolio-item' ).eq(0).css({ left: '0%', top: 0 });
    $( '.portfolio-item' ).eq(1).css({ left: '50%', top: 0 });
    $( '.portfolio-item' ).eq(2).css({ left: '0%', top: this.introHeight });
    $( '.portfolio-item' ).eq(3).css({ left: '25%', top: this.introHeight });
    $( '.portfolio-item' ).eq(4).css({ left: '0%', top: this.introHeight * 2 });
    $( '.portfolio-item' ).eq(5).css({ left: '50%', top: this.introHeight * 2 });
    $( '.portfolio-item' ).eq(6).css({ left: '75%', top: this.introHeight * 2 });
    $( '.portfolio-item' ).eq(7).css({ left: '50%', top: this.introHeight * 3 });
    $( '.portfolio-item' ).eq(8).css({ left: '75%', top: this.introHeight * 3 });
    $( '.portfolio-item' ).eq(9).css({ left: '0%', top: this.introHeight * 4 });
    $( '.portfolio-item' ).eq(10).css({ left: '25%', top: this.introHeight * 4 });
    $( '.portfolio-item' ).eq(11).css({ left: '50%', top: this.introHeight * 4 });
    $( '.portfolio-item' ).eq(12).css({ left: '75%', top: this.introHeight * 4});
  }

  setForSmaller() {
    $('.portfolios-area').css('height', (this.introHeight * 12) + this.piHeight);
    const height = $( '.portfolio-item.__wide').height();
    const padBot = parseInt($( '.portfolio-item.__wide').css(), 0);
    this.piHeight = height + padBot;
    // set the init position css of portofolio-item
    $( '.portfolio-item' ).css('position', 'absolute');
    $( '.portfolio-item' ).eq(0).css({ left: '0%', top: 0 });
    $( '.portfolio-item' ).eq(1).css({ left: '0%', top: this.piHeight });
    $( '.portfolio-item' ).eq(2).css({ left: '0%', top: (this.introHeight * 2) + this.piHeight});
    $( '.portfolio-item' ).eq(3).css({ left: '0%', top: (this.introHeight * 3) + this.piHeight});
    $( '.portfolio-item' ).eq(4).css({ left: '0%', top: (this.introHeight * 4) + this.piHeight });
    $( '.portfolio-item' ).eq(5).css({ left: '0%', top: (this.introHeight * 5) + this.piHeight });
    $( '.portfolio-item' ).eq(6).css({ left: '0%', top: (this.introHeight * 6) + this.piHeight });
    $( '.portfolio-item' ).eq(7).css({ left: '0%', top: (this.introHeight * 7) + this.piHeight });
    $( '.portfolio-item' ).eq(8).css({ left: '0%', top: (this.introHeight * 8) + this.piHeight });
    $( '.portfolio-item' ).eq(9).css({ left: '0%', top: (this.introHeight * 9) + this.piHeight });
    $( '.portfolio-item' ).eq(10).css({ left: '0%', top: (this.introHeight * 10) + this.piHeight });
    $( '.portfolio-item' ).eq(11).css({ left: '0%', top: (this.introHeight * 11) + this.piHeight });
    $( '.portfolio-item' ).eq(12).css({ left: '0%', top: (this.introHeight * 12) + this.piHeight});
  }
}
