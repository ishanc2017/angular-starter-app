import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockerTestService } from './docker-test-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected message : string = '';

  constructor(private dokcerTestService: DockerTestService) {}

  ngOnInit(): void {
    this.dokcerTestService.getTestMessage().subscribe({
      next: (response) => this.message = response,
      error: (err) => console.error('Error fetching message:', err)
    });
  }
}
