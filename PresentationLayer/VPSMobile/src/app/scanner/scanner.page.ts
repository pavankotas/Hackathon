import { Component } from '@angular/core';
import { OpenALPR, OpenALPROptions, OpenALPRResult } from '@ionic-native/openalpr/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

// import

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
private picture;
  constructor(private cameraPreview: CameraPreview, private openALPR: OpenALPR) { }


openCameraPlugin(){
let cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
    };
    const scanOptions: OpenALPROptions = {
        country: this.openALPR.Country.EU,
        amount: 3
    };
// start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
            console.log(res)
        },
        (err) => {
            console.log(err)
        });
    // Set the handler to run every time we take a picture
   /* this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
        console.log(result);
        // do something with the result
    });
*/

// picture options
    const pictureOpts: CameraPreviewPictureOptions = {
        width: 1280,
        height: 1280,
        quality: 85
    };



// take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;

        // To get imageData, you can use the @ionic-native/camera module for example. It works with DestinationType.FILE_URI and DATA_URL

        this.openALPR.scan(imageData, scanOptions)
            .then((res: [OpenALPRResult]) => console.log(res))
            .catch((error: Error) => console.error(error));

    }, (err) => {
        console.log(err);
        this.picture = 'assets/img/test.jpg';
    });

    // Switch camera
    this.cameraPreview.switchCamera();

// set color effect to negative
    this.cameraPreview.setColorEffect('negative');

// Stop the camera preview
    this.cameraPreview.stopCamera();
}

}
