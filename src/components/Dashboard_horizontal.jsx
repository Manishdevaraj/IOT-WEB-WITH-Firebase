import { Chart } from 'primereact/chart'
import { Container } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import {PropTypes} from "prop-types"
function Dashboard_horizontal(props) {
const [charthorizontalData, sethorizontalChartData] = useState({});
const [charthorizontalOptions, sethorizontalChartOptions] = useState({});

useEffect(() => {
    const { d1, d2, d3 } = props;
    // console.log('Props in Dasboard_hor:', props.d1, props.d2, props.d3);
    const data = {
        labels: ['Current Day', '1 Day Before','2 Day Before'],
        datasets: [
            {
                label: 'Temperature',
                backgroundColor: '#f50057',
                // borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [d1, d2, d3]
            },
            // {
            //     label: 'My Second dataset',
            //     // backgroundColor: documentStyle.getPropertyValue('--pink-500'),
            //     // borderColor: documentStyle.getPropertyValue('--pink-500'),
            //     data: [28, 48, 40, 19, 86, 27, 90]
            // }
        ]
    };
    const options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'white',
                    drawBorder: false
                }
            }
        }
    };

    sethorizontalChartData(data)
    sethorizontalChartOptions(options);
  }, [props]);

  return (
        <Container>
            <Chart type="bar" data={charthorizontalData} options={charthorizontalOptions}/>
        </Container>
    
    
  )
}
Dashboard_horizontal.propTypes=
{
    d1:PropTypes.any.isRequired,
    d2:PropTypes.any.isRequired,
    d3:PropTypes.any.isRequired
}
export default Dashboard_horizontal