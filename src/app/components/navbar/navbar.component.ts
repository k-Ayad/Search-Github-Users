import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleMenu(){
     document.querySelector('.toggle-menu')?.classList.toggle('active');

  }

}
