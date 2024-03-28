import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedAllergens = [1, 3, 5]

  settings = [
    {
      id: 'useDarkColor',
      text: 'Usar tema oscuro',
      type: 'bool',
      value: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
