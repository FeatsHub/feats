import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum, Stats, User } from 'src/api/models';
import { SystemStatsService, UserService } from 'src/api/services';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'src/app/utils/echarts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  user: User | undefined
  @ViewChild('userChartContent', {static: false}) userChartContent: ElementRef;
  @ViewChild('recipesChartContent', {static: false}) recipesChartContent: ElementRef;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _statsService: SystemStatsService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('userId')){
      this._userService.userCurrentRetrieve$Response({expand: '~all'}).subscribe({
        next: (response) => {
          this.user = response.body
          if (this.user.role != RoleEnum.Superadmin){
            this._router.navigate(['/recipes'])
          }
        },
        error: (e) => {
        },
        complete: () => {
        }
      })
    }
  }

  getStats(){
    this._statsService.systemStatsList$Response().subscribe(
      {
        next: (response) => {
          this.initCharts(response.body.results!);
        }
      }
    )
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.getStats();
    }, 1000);
  }

  initCharts(stats: Stats[]) {
    const statsTimes = stats.map(item => {
      const date = new Date(item.created);
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    });
    this.initUserChart(statsTimes, stats);
    this.initRecipesChart(statsTimes, stats);
  }

  initUserChart(times: string[], stats: Stats[]){
    let userChart = new Chart(
      times,
      this.userChartContent.nativeElement!
    )
    const userNumber = stats.map(item => {
      return item.user_number
    });

    userChart.addSerie('Total users', userNumber);
  }

  initRecipesChart(times: string[], stats: Stats[]){
    let recipesChart = new Chart(
      times,
      this.recipesChartContent.nativeElement!
    )
    const totalRecipesNumber = stats.map(item => {
      return item.total_recipe_number
    });
    const publicRecipesNumber = stats.map(item => {
      return item.public_recipe_number
    });
    const privateRecipesNumber = stats.map(item => {
      return item.private_recipe_number
    });

    recipesChart.addSerie('Total Recipes', totalRecipesNumber);
    recipesChart.addSerie('Public Recipes', publicRecipesNumber);
    recipesChart.addSerie('Private Recipes', privateRecipesNumber);
  }

}
