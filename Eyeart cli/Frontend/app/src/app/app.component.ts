import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/estructura/navbar/navbar.component';
import { FooterComponent } from './components/estructura/footer/footer.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule,RouterOutlet,FormsModule ,NavbarComponent, FooterComponent, PedidoComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
