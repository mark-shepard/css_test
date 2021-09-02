import { Component, OnInit } from '@angular/core';
import { WorkboxApiService } from './workbox-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'css-test';
  public isLoaded: boolean = false;
  public announcementsString: string = "";
  public announcementS: Subscription;

  constructor( private workboxApiService: WorkboxApiService ) {

    this.announcementS = this.workboxApiService.getAnnouncements().subscribe(
      ( value: any ) => { this.announcementsString = JSON.stringify(value);
                                           this.isLoaded = true;
                                          },
      ( err ) => { console.log("error getting announcements: " + err ) }
    );

  }

  ngOnInit() {

  }


}
