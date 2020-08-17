import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  thubmnilZoom
  gallery_display = true
  thumbnail_display = false
  p: number = 1;
  searchResult 
  userId = 0
  displayImage = false
  galleryTitle
  albumResult 
  dataArr
  galleryDet 
  constructor(private galleryService:GalleryService) { }

  ngOnInit(): void {
      //service get Gallery Title
      this.galleryService.getGalleryTitle().subscribe((results) => {
        this.galleryTitle = results;

       // creates array of array
        this.dataArr = this.galleryTitle.map(item=>{
          return [item.userId,item]
      });

      // create key value pair from array of array
      var maparr = new Map(this.dataArr); 
      
      //converting back to array from mapobject
      this.albumResult = [...maparr.values()];
      })

    
  }

  getId(id)
  {
    this.gallery_display = false
  this.thumbnail_display = true
    //get Album Id to Display Thumbnail
    this.displayImage = true
    this.userId = id
    this.galleryService.getGalleryDetails().subscribe((result) => {
      this.galleryDet = result;

     this.searchResult = this.galleryDet.filter( ({ albumId }) => albumId == this.userId );
   
     this.gallery_display = false
     this.thumbnail_display = true
   
     return this.searchResult      
  
    })

  }
  back(){
    this.gallery_display = true
     this.thumbnail_display = false
  }
  myFu(imgs) {
    var expandImg = document.getElementById("expandedImg");
    this.thubmnilZoom = imgs   
    expandImg.parentElement.style.display = "block";
  }
}
