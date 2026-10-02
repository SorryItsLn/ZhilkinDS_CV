import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [],
  selector: 'app-aside',
  styleUrl: './aside.component.scss',
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  private themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
    console.log('toggle');
  }
}
