import { Component, inject, OnInit } from '@angular/core';
import { THEMES, ThemeService } from '../services/theme.service';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';

@Component({
  imports: [MainComponent, AsideComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly themeService = inject(ThemeService);

  ngOnInit() {
    const t = localStorage?.getItem('theme');

    if (t === THEMES.DARK || t === THEMES.LIGHT) {
      console.log(t);

      this.themeService.setTheme(t);
    } else {
      this.themeService.setTheme(THEMES.LIGHT);
    }
  }
}
