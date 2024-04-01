import { Component, OnInit } from '@angular/core';

interface Tab {
  icon: string,
  tab: string,
  selected: boolean
}

@Component({
  selector: 'app-search-component',
  templateUrl: 'search-component.component.html',
  styleUrls: ['search-component.component.scss']
})
export class SearchComponent implements OnInit {

  tabs: Tab[] = [
    {
      icon: 'pizza',
      tab: 'recipes',
      selected: true
    },
    {
      icon: 'people',
      tab: 'users',
      selected: false
    },
  ] 

  constructor(
  ) {}

  ngOnInit(){}

  selectTab(selectedTab: Tab): void {
    this.tabs.forEach(tab => {
        if (tab === selectedTab) {
            tab.selected = true;
        } else {
            tab.selected = false;
        }
    });
  }

  isTabSelected(tabName: string): boolean {
    return this.tabs.find(tab => tab.tab === tabName)?.selected ?? false;
  }

}
