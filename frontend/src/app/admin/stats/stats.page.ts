import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum, User } from 'src/api/models';
import { UserService } from 'src/api/services';
import { init, EChartsOption, graphic, SeriesOption, color } from 'echarts';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  user: User | undefined
  @ViewChild('chartContent', {static: false}) chartContent: ElementRef;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _loadingCtrl: LoadingController,
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

  async ngAfterViewInit() {
    const loading = await this._loadingCtrl.create({
      message: 'Saving...',
      duration: 4000,
    });

    loading.present();
    setTimeout(() => {
      this.initChart(loading);
    }, 1000);
  }

  initChart(loading: HTMLIonLoadingElement) {
    var chartDom = this.chartContent.nativeElement;
    var myChart = init(chartDom);

    let option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      /*title: {
        text: 'Gradient Stacked Area Chart'
      },*/
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Usuarios', 'Recetas', 'Recetas Públicas', 'Recetas Privadas',]
      },
      series: [
        this.initLine(
          'Usuarios',
          [300, 250, 700, 200, 180, 150, 100, 500],
          'rgb(128, 255, 165)',
          'rgb(1, 191, 236)'
        ),
        this.initLine(
          'Recetas',
          [280, 240, 600, 550, 160, 130, 100, 450],
          'rgb(0, 221, 255)',
          'rgb(77, 119, 255)'
        ),
        this.initLine(
          'Recetas Públicas',
          [260, 220, 500, 170, 140, 110, 80, 400],
          'rgb(55, 162, 255)',
          'rgb(116, 21, 219)'
        ),
        this.initLine(
          'Recetas Privadas',
          [240, 200, 170, 150, 800, 90, 60, 350],
          'rgb(255, 0, 135)',
          'rgb(135, 0, 157)'
        ),
      ]
    };

    myChart.setOption(option);
    loading.dismiss();
  }

  initLine(name: string, data: number[], color1: string, color2: string): SeriesOption{
    return {
      name: name,
      data: data,
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: color1
          },
          {
            offset: 1,
            color: color2
          }
        ])
      },
    }
  }
}
