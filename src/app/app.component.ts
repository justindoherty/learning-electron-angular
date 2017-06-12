import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: string[];
  events: {[key:string]: string} = {};

  ngOnInit() {
    this.readdir();
    fs.watch(this.watchedDir, (event, filename) => {
      console.log(`${filename}: ${event}`);
      this.events[filename] = event;
      this.readdir();
    });
  }

  private readdir() {
    fs.readdir(this.watchedDir, (err, data) => {
      console.log(data);
      this.data = data;
    });
  }

  private get watchedDir() {
    return path.join(process.env.HOME, 'tmp', 'watched');
  }
}
