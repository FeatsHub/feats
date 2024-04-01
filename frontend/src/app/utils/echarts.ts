import { ElementRef } from '@angular/core';
import { init, EChartsOption, graphic, SeriesOption, color, EChartsType } from 'echarts';

export class Chart {

    xAxis: string[];
    HTMLElement: any;
    series: SeriesOption[] = [];
    private legend: string[] = []
    private myChart: EChartsType;
    private option: EChartsOption;

    constructor(
        xAxis: string[],
        HTMLElement: ElementRef
    ){
        this.xAxis = xAxis;
        this.HTMLElement = HTMLElement;
        this.initChart();
    }

    initChart() {
        var chartDom = this.HTMLElement;
        this.myChart = init(chartDom);
        this.myChart.showLoading();

        this.option = {
          xAxis: {
            type: 'category',
            data: this.xAxis
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
            data: this.legend
          },
          series: []
        } as EChartsOption;

        this.myChart.setOption(this.option);
        this.myChart.hideLoading();
    }

    addSerie(name: string, data: number[]){
        const colors = this.calculateColors();
        this.legend.push(name);

        const newSerie = {
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
                  color: colors[0]
                },
                {
                  offset: 1,
                  color: colors[1]
                }
              ])
            },
        } as SeriesOption;
        this.series.push(newSerie);
        this.option.series = this.series
        this.myChart.setOption(this.option);
    }

    calculateColors(){
        const color0_1 = 'rgb(128, 255, 165)';
        const color0_2 = 'rgb(1, 191, 236)';
    
        const color1_1 = 'rgb(0, 221, 255)';
        const color1_2 = 'rgb(77, 119, 255)';
    
        const color2_1 = 'rgb(55, 162, 255)';
        const color2_2 = 'rgb(116, 21, 219)';
    
        const color3_1 = 'rgb(255, 0, 135)';
        const color3_2 = 'rgb(135, 0, 157)';

        let colors = [color0_1, color0_2];

        if (!this.series || this.series.length == 0){
            colors = [color0_1, color0_2];
        }else if (this.series.length == 1){
            colors = [color1_1, color1_2];
        }else if (this.series.length == 2){
            colors = [color2_1, color2_2];
        }else if (this.series.length == 3){
            colors = [color3_1, color3_2];
        }
        return colors;
    }
}
