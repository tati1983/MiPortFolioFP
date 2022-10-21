import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: any = [];

  constructor(private storage: AngularFireStorage) { }

  public uploadImage($event: any, name: string){
    
    const file = $event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const task = this.storage.upload(filePath, file);

  }
 
  getImage(){
    // const imgRef = this.storage.refFromURL("gs://frontportfoliofp.appspot.com/name-your-file-path-here");
    const imgRef = this.storage.ref("name-your-file-path-here");
    imgRef.getDownloadURL().subscribe((data: any) => {
      this.url.push(data);
      return this.url;
    });
    
    // imgRef.getDownloadURL().subscribe(
    //     (data) => {
    //       console.log(data);
    //       this.url = data});
    //     console.log(this.url);
    //     return this.url;
    
    // const imagesRef = ref(this.storage, 'imagen')
    // list(imagesRef).then(async response => {
    //   for(let item of response.items){
    //     this.url = await getDownloadURL(item);
    //     console.log("La url es: " + this.url);
    //   }
    // }).catch(error => 
    //   console.error(error)
    // )
  }
}
