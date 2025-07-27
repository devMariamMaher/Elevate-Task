import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private _Renderer2 = inject(Renderer2);
  isDark: boolean = false;

  toggleTheme():void{
    const html = document.documentElement;
    this.isDark = !this.isDark;

    if(this.isDark){
      html.classList.add('dark');
    } else{
      html.classList.remove('dark');
    }

    console.log(html);
  }
}
