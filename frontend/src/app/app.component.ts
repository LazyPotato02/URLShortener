import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
    selector: 'app-root',
    imports: [FormsModule, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    shortenedUrl: any;
    url: string | null = null;

    shortenUrl() {
        console.log(this.url)


    }
}
