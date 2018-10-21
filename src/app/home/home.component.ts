import { Component, OnInit } from '@angular/core'
import { Emotion } from './emotion.model'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public response: Emotion = {
        anger: 0.02,
        contempt: 0.04,
        disgust: 0.04,
        fear: 0.5,
        happiness: 0,
        neutral: 0,
        sadness: 0.4,
        surprise: 0,
    }
    private anger: number
    private contempt: number
    private disgust: number
    private fear: number
    private happiness: number
    private neutral: number
    private sadness: number
    private surprise: number
    public finalEmotion: Emotion

    constructor() {
        this.anger = this.response.anger
        this.contempt = this.response.contempt
        this.disgust = this.response.disgust
        this.fear = this.response.fear
        this.happiness = this.response.happiness
        this.neutral = this.response.neutral
        this.sadness = this.response.sadness
        this.surprise = this.response.surprise
        const sum = [
            this.anger,
            this.contempt,
            this.disgust,
            this.fear,
            this.happiness,
            this.neutral,
            this.sadness,
            this.surprise,
        ]
        const avg = sum.reduce((total, amount) => total + amount) / sum.length
        const final = sum.map(val => val / avg)
        this.finalEmotion = {
            anger: final[0],
            contempt: final[1],
            disgust: final[2],
            fear: final[3],
            happiness: final[4],
            neutral: final[5],
            sadness: final[6],
            surprise: final[7],
        }
        debugger
    }

    ngOnInit() {}
}
