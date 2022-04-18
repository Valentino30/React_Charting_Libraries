import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
} from "recharts";

type RechartsLineChartProps = {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
};

export const RechartsLineChart = ({ data }: RechartsLineChartProps) => (
  <LineChart width={800} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);
