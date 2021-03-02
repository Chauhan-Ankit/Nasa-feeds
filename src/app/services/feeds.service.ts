import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService{
    private apiKey = "0zXXkoERVyda0dVKneuHChVsFLvv9m0KTUa1VWzj";
    constructor(private http: HttpClient){}

    getFeeds() {
        const apodUrl = `https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=${this.apiKey}`;
        return this.http.get<string>(apodUrl);
    }
      
}