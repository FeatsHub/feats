import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/api/models';
import { UserSettingsService } from 'src/api/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedAllergens = [1, 3, 5]
  themeToggle = false;

  settings: UserSettings

  constructor(
    private _settingsService: UserSettingsService
  ) { }

  ngOnInit() {
    this.initDarkMode()
    this._settingsService.userSettingsList$Response().subscribe(
      {
        next: (response) => {
          //this.settings = response.body.results
        }
      }
    )
  }

  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  initDarkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

}
