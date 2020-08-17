import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor( private http : HttpClient) { }

  getGalleryDetails():Observable<any>
  {
    return this.http.get('http://jsonplaceholder.typicode.com/photos');
  }
  getGalleryTitle():Observable<any>
  {
    return this.http.get('http://jsonplaceholder.typicode.com/albums');
  }
}
