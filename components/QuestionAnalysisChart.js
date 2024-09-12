import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const QuestionAnalysisChart = ({ correct, total }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [correct, total - correct],
          backgroundColor: ['#3b82f6', '#e5e7eb'],
          borderWidth: 0,
        }]
      },
      options: {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [correct, total]);
  return (
    <div className="w-28 h-28 md:w-36 md:h-36 relative">
      <canvas ref={chartRef}></canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/images/aim.png" alt="Target" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default QuestionAnalysisChart
