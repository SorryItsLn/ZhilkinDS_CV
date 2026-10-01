import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';

@Component({
  imports: [MainComponent, AsideComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[attr.data-theme]': 'themeService.theme()',
  },
})
export class App {
  protected readonly themeService = inject(ThemeService);
  protected readonly title = signal('zhilknDS');
}
