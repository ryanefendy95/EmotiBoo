import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Emotion } from './emotion.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
    @Input() public emotions: Emotion;
    private anger: number;
    private contempt: number;
    private disgust: number;
    private fear: number;
    private happiness: number;
    private neutral: number;
    private sadness: number;
    private surprise: number;
    public finalEmotion: Emotion;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(): void {
        if (this.emotions) {
            this.anger = this.emotions.anger;
            this.contempt = this.emotions.contempt;
            this.disgust = this.emotions.disgust;
            this.fear = this.emotions.fear;
            this.happiness = this.emotions.happiness;
            this.neutral = this.emotions.neutral;
            this.sadness = this.emotions.sadness;
            this.surprise = this.emotions.surprise;
            const sum = [
                this.anger,
                this.contempt,
                this.disgust,
                this.fear,
                this.happiness,
                this.neutral,
                this.sadness,
                this.surprise,
            ];
            const avg =
                sum.reduce((total, amount) => total + amount) / sum.length;
            const final = sum.map(val => val / avg);
            this.finalEmotion = {
                anger: final[0],
                contempt: final[1],
                disgust: final[2],
                fear: final[3],
                happiness: final[4],
                neutral: final[5],
                sadness: final[6],
                surprise: final[7],
            };
        }
    }
}
