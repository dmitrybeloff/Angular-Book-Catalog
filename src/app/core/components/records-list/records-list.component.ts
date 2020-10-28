import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss']
})
export class RecordsListComponent implements OnInit {

  @Input() dataSource: SimpleRecord[];

  public isLargeScreen = true;
  public isMediumScreen = true;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isLargeScreen = breakpointObserver.isMatched('(min-width: 1100px)');
    this.isMediumScreen = breakpointObserver.isMatched('(min-width: 600px)') && breakpointObserver.isMatched('(max-width: 1099px)');
    breakpointObserver.observe([
      '(orientation: portrait)',
      '(orientation: landscape)',
    ]).subscribe(() => {
      this.isLargeScreen = breakpointObserver.isMatched('(min-width: 1100px)');
      this.isMediumScreen = breakpointObserver.isMatched('(min-width: 600px)') && breakpointObserver.isMatched('(max-width: 1099px)');
    });
  }

  ngOnInit() {
  }

}
