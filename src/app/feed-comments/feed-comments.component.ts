import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feeds.service';

@Component({
  selector: 'app-feed-comments',
  templateUrl: './feed-comments.component.html',
  styleUrls: ['./feed-comments.component.scss']
})
export class FeedCommentsComponent implements OnInit {
  
  feeds:any;
  constructor(private feedService:FeedService) { }

  ngOnInit(): void {
    this.feedService.getFeeds().subscribe((val:any) =>{
      let nearByObjects = val.near_earth_objects;
      let key = Object.keys(nearByObjects)[0];
      this.feeds = nearByObjects[key];

    })
  }

}
