import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() start: number;
  @Input() limit: number;
  @Input() count: number;

  @Output() pageChange = new EventEmitter();

  public previous: number;
  public current: number;
  public next: number;
  public last: number;
  public gapNext = false;
  public gapPrev = false;

  constructor() { }

  public onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  public ngOnInit() {
    if (this.start > 0) {
      this.current = this.start / this.limit + 1;
    } else {
      this.current = 1;
    }
    this.last = Math.floor(this.count / this.limit) + 1;
    if (this.current > 1) {
      this.previous = this.current - 1;
    } else {
      this.previous = null;
    }
    if (this.current < this.last - 1) {
      this.next = this.current + 1;
    } else {
      this.next = null;
    }
    if (this.next && this.last - this.next > 1) {
      this.gapNext = true;
    }
    if (this.previous && this.previous > 2) {
      this.gapPrev = true;
    }
  }

}
