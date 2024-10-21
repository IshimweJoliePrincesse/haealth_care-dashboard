import { DiagnosisHistory } from "@/app/types/types";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const DiagnosticChart: React.FC<DiagnosisHistory> = ({ data }) => {
  const daysAndMonth = data
    .map((entry) => `${entry.month.slice(0, 3)}, ${entry.year}`)
    .slice(0, 6)
    .reverse();
  console.log("Labels", daysAndMonth);

  const systoleData = data
    .map((entry) => entry.blood_pressure.systolic.value)
    .slice(0, 6)
    .reverse();
  console.log("Sys", systoleData);

  const diastoleData = data
    .map((entry) => entry.blood_pressure.diastolic.value)
    .slice(0, 6)
    .reverse();
  console.log("Dys", diastoleData);

  const chartData = {
    labels: daysAndMonth,
    datasets: [
      {
        label: "Systolic Bp",
        data: systoleData,
        backgroundColor: "#8C6FE6",
        borderColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        tension: 0.4,
      },
      {
        label: "Diastolic Bp",
        data: diastoleData,
        backgroundColor: "#8C6FE6",
        borderColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options}></Line>
    </div>
  );
};

export default DiagnosticChart;
