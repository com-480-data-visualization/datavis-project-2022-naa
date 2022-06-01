import React from "react";
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.fractions)

        this.state = {
            series: [{
                data:  props.fractions
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                colors: [props.color],

                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    labels: ["DEMOCRAT", "REPUBLICAN", "OTHER", "LIBERTARIAN"],
                    enabled: false
                },
                xaxis: {
                    categories: ["DEMOCRAT", "REPUBLICAN", "OTHER", "LIBERTARIAN"]//props.parties,
                }
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                height={200} />
            </div>
        );
    }
}

export default ApexChart;
