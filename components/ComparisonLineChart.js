"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export default function ComparisonLineChart({ userPercentile, data }) {
  //  Don't know tf is happening! figured this out after lots of stackoverflow and documentation. it's been long time since is used charts lol xd
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.percentile),
        datasets: [
          {
            label: "Number of Students",
            data: data.map((item) => item.students),
            borderColor: "#7b78d1",
            tension: 0.3,
            fill: false,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: 100,
            title: {
              display: true,
              text: "Percentile",
            },
            ticks: {
              stepSize: 10,
            },
          },
          y: {
            title: {
              display: true,
              text: "Number of Students",
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          annotation: {
            annotations: {
              userPercentile: {
                type: "line",
                scaleID: "x",
                value: userPercentile,
                borderColor: "#7b78d1",
                borderWidth: 2,
                borderDash: [6, 6],
                label: {
                  content: "Your Percentile",
                  enabled: true,
                  position: "center",
                  display: true,
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                  color: "#7b78d1",
                  padding: 6,
                  borderRadius: 4,
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                  xAdjust: 0,
                  yAdjust: -10,
                },
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [userPercentile, data]);

  return (
    <div className="h-[300px] sm:h-[400px] w-full">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
