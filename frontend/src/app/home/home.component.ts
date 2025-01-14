import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ShortenerService} from '../services/shortener.service';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    shortenedUrl: any;
    url: string | null = null;

    constructor(private shortenerService: ShortenerService) {

    }

    shortenUrl() {
        this.shortenerService.createShortenedUrl({url: this.url}).subscribe(
            data => {
                this.shortenedUrl = data;
            }, error => {
                console.log(error);
            }
        );

    }
}
