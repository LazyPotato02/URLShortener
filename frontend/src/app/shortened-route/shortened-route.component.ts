import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-shortened-route',
    template: `
        <div>
            <h1>Shortened Route</h1>
            <p>The ID from the URL is: {{ id }}</p>
        </div>
    `,
    standalone: true,
})
export class ShortenedRouteComponent implements OnInit {
    id!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        // Retrieve the 'id' from the route parameters
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('ID from URL:', this.id);
        });
    }
}
