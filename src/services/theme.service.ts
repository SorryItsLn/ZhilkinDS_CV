import { Service, signal } from '@angular/core';

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

@Service()
export class ThemeService {
  theme = signal<(typeof THEMES)[keyof typeof THEMES]>('dark');

  toggleTheme() {
    const root = document.documentElement;

    this.theme.update((theme) => (theme === 'dark' ? THEMES.LIGHT : THEMES.DARK));
    root.dataset['theme'] = this.theme();
  }
}
// const root = document.documentElement,
//   btn = document.getElementById('theme');
// try {
//   const t = localStorage.getItem('theme');
//   if (t) root.dataset.theme = t;
// } catch (e) {}
// btn.addEventListener('click', () => {
//   const dark = root.dataset.theme
//     ? root.dataset.theme === 'dark'
//     : matchMedia('(prefers-color-scheme: dark)').matches;
//   root.dataset.theme = dark ? 'light' : 'dark';
//   try {
//     localStorage.setItem('theme', root.dataset.theme);
//   } catch (e) {}
// });
