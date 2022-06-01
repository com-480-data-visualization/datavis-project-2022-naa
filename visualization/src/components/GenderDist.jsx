import React from "react";
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            series: [{
                name: 'Males',
                data: [1, 4, 5, 7, 14, 15, 14, 16, 9,  1]
            },
                {
                    name: 'Females',
                    data: [-1, -1, -3, -2, -2, -1, -3, -3, 0, 0]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true
                },
                colors: ['rgba(11, 117, 134, 0.61)', 'rgba(193, 58, 79, 0.61)'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                        barWidth: '40%'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -5,
                    max: 18,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val)
                        }
                    }
                },
                title: {
                    text: 'Mauritius population pyramid 2011'
                },
                xaxis: {
                    categories: ['31-35', '36-40', '41-45', '46-50',
                        '51-55', '56-60', '61-65', '66-70', '71-75', '76-80'
                    ],

        title: {
                        text: 'Absolute number'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val))
                        }
                    }
                },
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar"
                                height={440} />
            </div>
        );
    }
}

export default ApexChart;