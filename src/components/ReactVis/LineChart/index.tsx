import {
  XAxis,
  YAxis,
  XYPlot,
  LineSeries,
  HorizontalGridLines,
} from "react-vis";

type ReactVisLineChartProps = {
  data: { x: number; y: number }[];
};

export const ReactVisLineChart = ({ data }: ReactVisLineChartProps) => (
  <XYPlot width={300} height={300}>
    <HorizontalGridLines />
    <LineSeries data={data} />
    <XAxis />
    <YAxis />
  </XYPlot>
);
