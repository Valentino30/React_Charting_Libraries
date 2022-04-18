import round from "round";
import { VictoryChart, VictoryLine, VictoryVoronoiContainer } from "victory";

type VictoryLineChartProps = {
  data: {
    x: number;
    y: number;
  }[];
};

export const VictoryLineChart = ({ data }: VictoryLineChartProps) => (
  <VictoryChart
    containerComponent={
      <VictoryVoronoiContainer
        labels={({ datum }) => `${round(datum.x, 2)}, ${round(datum.y, 2)}`}
      />
    }
  >
    <VictoryLine
      data={data}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
    />
  </VictoryChart>
);
