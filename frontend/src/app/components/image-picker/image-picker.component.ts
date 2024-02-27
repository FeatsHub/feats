import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { base64toBlob } from 'src/app/utils/functions';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent  implements OnInit {

  @Input() imageUrl: string | undefined = undefined;
  @Output() selectImage = new EventEmitter<Blob>();

  @Input() width: string
  @Input() height: string
  @Input() borderRadius: string

  public actionSheetButtons = [
    {
      text: 'Usar cámara',
      data: {
        action: 'camera',
      },
    },
    {
      text: 'Subir foto',
      data: {
        action: 'gallery',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {}

  selectNewImage(image: Blob) {
    this.selectImage.emit(image);
  }

  async takePicture(e: any) {
    if (e.detail.data.action == 'camera') {
      this.openGallery(CameraSource.Camera)
  
    }else if (e.detail.data.action == 'gallery') {
      this.openGallery(CameraSource.Photos)
    }
  }

  async openGallery(type: CameraSource){
    try{
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: type
      });

      this.selectNewImage(
        base64toBlob(image.dataUrl!)
      );

    }catch {
      console.error('Error picking image');
      Camera.requestPermissions()
    }
  }


}
