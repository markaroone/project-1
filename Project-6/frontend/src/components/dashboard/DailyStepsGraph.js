import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './DailyStepsGraph.module.css';

Chart.register(...registerables);
Chart.defaults.font.size = 10;
Chart.defaults.font.family = 'Poppins';

const titleTooltip = (tooltipItems) => {
  return null;
};

const DailyStepsGraph = () => {
  const [dataToGraph, setDataToGraph] = useState([0, 0, 0, 0, 0, 0, 0]);

  const startOfWeek = new Date(moment().startOf('week'));
  const endOfWeek = new Date(moment().endOf('week'));

  let dateArr = [];

  for (let i = 0; i < 7; i++) {
    const day = moment().startOf('week').add(i, 'd');
    const startOfDay = day.startOf('day').format();
    const endOfDay = day.endOf('day').format();

    dateArr.push({ start: startOfDay, end: endOfDay });
  }

  const getDataThisWeek = async () => {
    const {
      data: { data },
    } = await axios.get(
      `http://localhost:8000/api/v1/step-records?date[lte]=${endOfWeek}&date[gte]=${startOfWeek}&sort=-date`
    );

    const dataToSave = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < dateArr.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (
          new Date(data[j].date) < new Date(dateArr[i].end) &&
          new Date(data[j].date) > new Date(dateArr[i].start)
        )
          dataToSave[i] = data[j].steps;
      }
    }

    setDataToGraph([...dataToSave]);
  };

  useEffect(() => {
    getDataThisWeek();
  }, []);

  const bodyTooltip = (tooltipItems) => {
    return `${tooltipItems.raw} steps`;
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      // x: {
      //   ticks: true,
      //   grid: {
      //     borderDash: 10,
      //   },
      //   borderWidth: 0.5,
      //   color: '#000',
      // },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          callback: (value, index, ticks) => {
            return value.toFixed(0);
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: 'transparent',
        },
        ticks: {
          callback: (value, index, values) => {
            return moment().day(value).format('ddd');
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        pointStyle: 'circle',
        hoverRadius: 5,
        hitRadius: 5,
      },
      line: {
        borderWidth: 2,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // mode: 'index',
        // intersect: false,
        titleAlign: 'center',
        backgroundColor: '#343a40',
        bodyColor: '#fff',
        cornerRadius: 0,
        // xAlign: 'left',
        yAlign: 'bottom',
        displayColors: false,
        padding: 10,
        callbacks: {
          title: titleTooltip,
          label: bodyTooltip,
        },
      },
      transitions: {
        show: {
          animations: {
            x: {
              from: 0,
            },
            y: {
              from: 0,
            },
          },
        },
        hide: {
          animations: {
            x: {
              to: 0,
            },
            y: {
              to: 0,
            },
          },
        },
      },
      // hover: {
      //   mode: 'index',
      //   intersect: false,
      // },
    },
    layout: {
      padding: 0,
    },
  };

  const dataForGraph = {
    labels: dateArr.map((el) => el.start),
    datasets: [
      {
        label: `Steps`,
        data: dataToGraph.map((el) => el),
        fill: {
          target: 'origin',
          //   above: '#5c7cfaaa',
          above: '#fd7e14aa',
        },
        // borderColor: '#5c7cfa',
        borderColor: '#fd7e14',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Line data={dataForGraph} options={options} />
    </div>
  );
};

export default DailyStepsGraph;
