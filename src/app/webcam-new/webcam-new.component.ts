import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'app-webcam-new',
    templateUrl: './webcam-new.component.html',
    styleUrls: ['./webcam-new.component.css'],
})
export class WebcamNewComponent implements OnInit {
    @Output()
    notify: EventEmitter<number[]> = new EventEmitter<number[]>();
    public showWebcam = true;
    public multipleWebcamsAvailable = false;
    public errors: WebcamInitError[] = [];
    public webcamImage: WebcamImage = null; // latest snapshot
    private trigger: Subject<void> = new Subject<void>(); // webcam snapshot trigger

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
        // this.trigger.next();
        setInterval(() => {
            this.trigger.next();
        }, 2000);
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
            },
            body: this.webcamImage.imageAsBase64, // body data type must match "Content-Type" header,
        })
            .then(d => {
                // console.log(d);
                return d.json();
            })
            .then(d => {
                console.log(d);
                this.notify.emit(d[0].faceAttributes.emotion);
            });
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
}
