import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentPath:string ='';
  constructor(private router : Router){
    this.router.events.subscribe(()=>{
       this.currentPath = router.url;
    });
    
  }
  toggleMenu(){
     document.querySelector('.toggle-menu')?.classList.toggle('active');
  }

}
