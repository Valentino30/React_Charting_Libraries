import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
      label: string;
      data: any[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

export function ReactChartsLineChart({ data }: ReactChartsLineChartProps) {
  return <Line options={options} data={data} />;
}
