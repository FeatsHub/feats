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
  fromDate: string
  toDate: string
  stats: Stats[] = []
  userChart: Chart
  recipesChart: Chart

  @ViewChild('userChartContent', {static: false}) userChartContent: ElementRef;
  @ViewChild('recipesChartContent', {static: false}) recipesChartContent: ElementRef;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _statsService: SystemStatsService,
    private _loadingCtrl: LoadingController
  ) {
    this.fromDate = new Date().toISOString().split('T')[0];
    let fechaDeHoy: Date = new Date();
    let fechaDeMañana: Date = new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000));

    let fechaDeMañanaISO: string = fechaDeMañana.toISOString().split('T')[0];
    this.toDate = fechaDeMañanaISO
  }

  ngOnInit() {
    if (localStorage.getItem('userId')){
      this._userService.userCurrentRetrieve$Response({expand: '~all'}).subscribe({
        next: (response) => {
          this.user = response.body
          if (this.user.role != RoleEnum.Superadmin){
            this._router.navigate(['/recipes'])
          }
        }
      })
    }
  }

  async getStats(){
    const loading = await this._loadingCtrl.create({
      message: 'Loading...',
      duration: 4000,
    });
    loading.present();
    this._statsService.systemStatsList$Response(
      {
        limit: 9999,
        start: this.fromDate,
        end: this.toDate
      }
    ).subscribe(
      {
        next: (response) => {
          this.stats = response.body.results!;
        },
        complete: () => {
          const statsTimes = this.stats.map(item => {
            const date = new Date(item.created);
            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            return `${day}/${month} ${hours}:${minutes}`;
          });

          this.userChart.xAxis = statsTimes;
          this.userChartSetValues();

          this.recipesChart.xAxis = statsTimes;
          this.recipesChartSetValues();
          loading.dismiss();
        }
      }
    )
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.initCharts();
    }, 1000);
  }

  initCharts() {
    this.userChart = new Chart(
      this.userChartContent.nativeElement!
    )

    this.recipesChart = new Chart(
      this.recipesChartContent.nativeElement!
    )

    this.getStats();
  }

  userChartSetValues(){
    const userNumber = this.stats.map(item => {
      return item.user_number
    });

    this.userChart.addSerie('Total users', userNumber);
  }

  recipesChartSetValues(){
    const totalRecipesNumber = this.stats.map(item => {
      return item.total_recipe_number
    });
    const publicRecipesNumber = this.stats.map(item => {
      return item.public_recipe_number
    });
    const privateRecipesNumber = this.stats.map(item => {
      return item.private_recipe_number
    });

    this.recipesChart.addSerie('Total Recipes', totalRecipesNumber);
    this.recipesChart.addSerie('Public Recipes', publicRecipesNumber);
    this.recipesChart.addSerie('Private Recipes', privateRecipesNumber);
  }

  filterDate(lastDate: boolean){
    if (!lastDate){
      let fechaDeHoy: Date = new Date(this.fromDate);
      let fechaDeMañana: Date = new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000));
  
      let fechaDeMañanaISO: string = fechaDeMañana.toISOString().split('T')[0];
      this.toDate = fechaDeMañanaISO
    }
    this.getStats()
  }

}
