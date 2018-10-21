import { Component, OnInit } from '@angular/core';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import axios from 'axios';

@Component({
    selector: 'app-webcam-new',
    templateUrl: './webcam-new.component.html',
    styleUrls: ['./webcam-new.component.css'],
})
export class WebcamNewComponent implements OnInit {
    public showWebcam = true;
    public multipleWebcamsAvailable = false;
    public errors: WebcamInitError[] = [];

    // latest snapshot
    public webcamImage: WebcamImage = null;
    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();

    constructor() {}

    ngOnInit() {
        WebcamUtil.getAvailableVideoInputs().then(
            (mediaDevices: MediaDeviceInfo[]) => {
                this.multipleWebcamsAvailable =
                    mediaDevices && mediaDevices.length > 1;
            }
        );
    }

    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public handleImage(webcamImage: WebcamImage): void {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;

        fetch('http://localhost:4000/v1/face', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8',
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: this.webcamImage.imageAsBase64, // body data type must match "Content-Type" header
        })
            .then(d => {
                console.log(d);
                return d.json();
            })
            .then(d => {
                console.log(d);
            });

        // axios.post('/v1/face', {
        //   firstName: 'Fred',
        //   lastName: 'Flintstone'
        // })
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });


    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
}
