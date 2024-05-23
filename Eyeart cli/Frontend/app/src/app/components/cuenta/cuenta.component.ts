import { Component } from '@angular/core';
import { FooterComponent } from '../estructura/footer/footer.component';
import { NavbarComponent } from '../estructura/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterLink, FormsModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {
placeholder = "";


}
