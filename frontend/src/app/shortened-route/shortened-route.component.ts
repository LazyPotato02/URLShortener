import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShortenerService} from '../services/shortener.service';


@Component({
    selector: 'app-shortened-route',
    templateUrl: './shortened-route.component.html',
    styleUrls: ['./shortened-route.component.css'],
    standalone: true,
})
export class ShortenedRouteComponent implements OnInit {
    id!: string;

    constructor(private route: ActivatedRoute, private shortenerService: ShortenerService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.shortenerService.getShortenedUrl(this.id).subscribe(
                (data: any) => {
                    window.location.href = data.url;
                }
            );
        });
    }
}
