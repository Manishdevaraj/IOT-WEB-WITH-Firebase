import  { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import PropType from "prop-types"
function LineChart(props) {
    

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const {d11,d12,d13,d14,d15,d16,d17,d18}=props
        const {d21,d22,d23,d24,d25,d26,d27,d28}=props
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['7am', '10am', '1pm', '4pm', '7pm', '10pm', '1am', '4am'],
            datasets: [
                {
                    label: 'Temperature',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [d11,d12,d13,d14,d15,d16,d17,d18]
                },
                {
                    label: 'Humidity',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [d21,d22,d23,d24,d25,d26,d27,d28]
                }
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [props]);
  return (
   
    <Chart type="line" data={chartData} options={chartOptions} />

  )
}

LineChart.propTypes=
{
    d11:PropType.any.isRequired,
    d12:PropType.any.isRequired,
    d13:PropType.any.isRequired,
    d14:PropType.any.isRequired,
    d15:PropType.any.isRequired,
    d16:PropType.any.isRequired,
    d17:PropType.any.isRequired,
    d18:PropType.any.isRequired,
    d21:PropType.any.isRequired,
    d22:PropType.any.isRequired,
    d23:PropType.any.isRequired,
    d24:PropType.any.isRequired,
    d25:PropType.any.isRequired,
    d26:PropType.any.isRequired,
    d27:PropType.any.isRequired,
    d28:PropType.any.isRequired,
}



export default LineChart