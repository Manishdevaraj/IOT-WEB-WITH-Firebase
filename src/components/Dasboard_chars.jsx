import { Chart } from 'primereact/chart';
import { useState,useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import {PropTypes} from "prop-types"


function Dasboard_chars(props) 
{
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
     const { d1, d2, d3 } = props;
    //   console.log('Props in Dasboard_chars:', props.d1, props.d2, props.d3);
      const documentStyle = getComputedStyle(document.documentElement);
      const data = {
          labels: ['Two Day Before', 'One Day Before', 'Current day'],
          datasets: [
              {
                  data: [d1, d2, d3],
                  backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                  ],
                  hoverBackgroundColor: [
                      documentStyle.getPropertyValue('--blue-400'), 
                      documentStyle.getPropertyValue('--yellow-400'), 
                      documentStyle.getPropertyValue('--green-400')
                  ]
              }
          ]
      }
      const options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true
                  }
              }
          }
      };
 
      setChartData(data);
      setChartOptions(options);

  }, [props]);


  return (
    
   <Container>
      <Chart type="bar" data={chartData} options={chartOptions} />
   </Container>
   
  )
}

Dasboard_chars.propTypes=
{
    d1:PropTypes.any.isRequired,
    d2:PropTypes.any.isRequired,
    d3:PropTypes.any.isRequired
}


export default Dasboard_chars