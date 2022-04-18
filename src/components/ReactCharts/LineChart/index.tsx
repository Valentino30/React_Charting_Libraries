import {
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

type ReactChartsLineChartProps = {
  data: {
    labels: string[];
    datasets: {
      data: any[];
      label: string;
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

export function ReactChartsLineChart({ data }: ReactChartsLineChartProps) {
  return <Line options={options} data={data} />;
}
