import { DOCUMENT, inject, Service, signal } from '@angular/core';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

@Service()
export class ThemeService {
  readonly theme = signal<(typeof THEMES)[keyof typeof THEMES]>('dark');
  private document = inject(DOCUMENT);

  toggleTheme() {
    const root = this.document.documentElement;

    this.theme.update((theme) => (theme === 'dark' ? THEMES.LIGHT : THEMES.DARK));
    root.dataset['theme'] = this.theme();
    localStorage?.setItem('theme', this.theme());
  }

  setTheme(theme: (typeof THEMES)[keyof typeof THEMES]) {
    const root = this.document.documentElement;

    this.theme.set(theme);

    if (!root.dataset) {
      return;
    }

    root.dataset['theme'] = this.theme();
    localStorage?.setItem('theme', this.theme());
  }
}
