import React from 'react';
import styles from './DataGraph.module.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
Chart.defaults.font.size = 10;
Chart.defaults.font.family = 'Poppins';

const titleTooltip = (tooltipItems) => {
  return null;
};

const DataGraph = ({ data, typeOfGraph }) => {
  const type = data.activityType;

  const bodyTooltip = (tooltipItems) => {
    if (typeOfGraph === 'altitude') {
      return `${tooltipItems.raw.toFixed(1)} m`;
    } else if (typeOfGraph === 'speed' && type === 'cycling') {
      return `${tooltipItems.raw.toFixed(1)} kph`;
    } else if (typeOfGraph === 'speed' && type === 'running') {
      // return `${tooltipItems.raw} /km`;
      const pace = tooltipItems.raw;
      const paceMin = Math.trunc(pace);
      const paceSec = Math.round((pace - paceMin) * 60);

      return `${paceMin}:${paceSec} /km`;
    } else if (typeOfGraph === 'heartRate') {
      return `${tooltipItems.raw} bpm`;
    }

    return `${tooltipItems.raw.toFixed(1)} kph`;
  };

  let fill, borderColor, stepSize, dataToGraph;

  if (typeOfGraph === 'altitude') {
    // fill = '#c0eb75';
    fill = '#37b24daa';
    // borderColor = '#94d82d';
    borderColor = '#37b24d';
    stepSize = 50;
    dataToGraph = 'altitude';
  } else if (typeOfGraph === 'speed' && type === 'cycling') {
    // fill = '#5c7cfa99';
    fill = '#339af0aa';
    // borderColor = '#5c7cfa';
    borderColor = '#339af0';
    stepSize = 10;
    dataToGraph = 'speed';
  } else if (typeOfGraph === 'speed' && type === 'running') {
    fill = '#5c7cfaaa';
    borderColor = '#5c7cfa';
    stepSize = 10;
    dataToGraph = 'pace';
  } else if (typeOfGraph === 'heartRate') {
    fill = '#f76707aa';
    borderColor = '#f76707';
    stepSize = 100;
    dataToGraph = 'heartRate';
  }

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
          stepSize: stepSize,
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
            if (!dataToUse[index].lapStatus) return null;
            const toReturn =
              dataToUse[index].lapStatus.count / data.laps.length;
            return toReturn.toFixed(1);
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        pointStyle: 'circle',
        hoverRadius: 0,
        hitRadius: 0,
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
  };

  //   if (typeOfGraph === 'heartRate') options.scales.y.max = 250;

  const dataToUse = data.laps
    .map((lap, lapIndex) => {
      const numberOfLaps = data.laps.length;

      return lap.Track.Trackpoint.map((el, elIndex) => {
        // const speed1 = el.Extensions['ns3:TPX']['ns3:Speed'];
        // const speed2 = +el.Extensions.TPX.Speed.__text * 3.6;
        // console.log(el.Extensions.TPX);

        const speedToUse =
          typeof el.Extensions.TPX === 'undefined'
            ? +el.Extensions['ns3:TPX']['ns3:Speed'] * 3.6
            : +el.Extensions.TPX.Speed.__text * 3.6;

        const pace = 60 / speedToUse;
        // const paceMin = Math.trunc(pace);
        // const paceSec = Math.round((pace - paceMin) * 60);

        return {
          time: new Date(el.Time),
          altitude: +el.AltitudeMeters,
          distance: +el.DistanceMeters,

          speed: speedToUse,

          pace: pace,

          heartRate: +el.HeartRateBpm.Value,
          position: [
            +el.Position.LatitudeDegrees,
            +el.Position.LongitudeDegrees,
          ],
          lapStatus:
            elIndex === 0
              ? { start: true, count: lapIndex * numberOfLaps }
              : null,
        };
      });
    })
    .flat();

  //   console.log([dataToUse.flat()]);

  //   const speedAvg = new Array(data.length).fill(stats.timing.speed.avgSpeed);
  //   console.log(speedAvg);

  const dataForGraph = {
    labels: dataToUse.map((el) => Math.round(el.distance)),
    datasets: [
      {
        label: `${typeOfGraph.toUpperCase()}`,
        data: dataToUse.map((el) => el[`${dataToGraph}`]),
        fill: {
          target: 'origin',
          above: fill,
        },
        borderColor,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Line data={dataForGraph} options={options} />
    </div>
  );
};

export default DataGraph;
