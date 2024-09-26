import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loggedInUserName: string | null = null;
  constructor(private authService: AuthService, private router: Router) {} // Inject Router
  ngOnInit() {


  this.loggedInUserName = this.authService.getLoggedInUserName();

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']); // Use injected Router for navigation
  }
}
