import  { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import PropTypes from 'prop-types';

function Dashboardpie(props) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const { d1, d2, d3 } = props;

    // Log props for debugging
    // console.log('Props in Dashboardpie:', d1, d2, d3);

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
            'rgba(153, 102, 255, 0.2)',
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);

    // Cleanup function to clear outdated dependencies
    return () => {
      // Any cleanup code here, if needed
    };
  }, [props]);

  return (
    <div>
      <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
    </div>
  );
}

Dashboardpie.propTypes = {
  d1: PropTypes.any.isRequired,
  d2: PropTypes.any.isRequired,
  d3: PropTypes.any.isRequired,
};

export default Dashboardpie;
