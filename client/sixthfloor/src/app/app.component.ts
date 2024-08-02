import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sixthfloor';

  constructor(private http : HttpClient) {
    http.get('http://127.0.0.1:8000/hello/').subscribe(res => {
      const jsonRes = res as { data: string };
      this.title = jsonRes.data;
    })
  }
}
