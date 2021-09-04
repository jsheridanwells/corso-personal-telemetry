import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  result: string = '';
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get()
      .subscribe(
        res => this.result = res,
        err => {
          this.result = `And we got errrrrrror... ${ err.message }`;
        }
      )
  }

}
