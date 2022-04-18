import Chart from "react-apexcharts";

type ApexLineChartProps = {
  data: {
    name: string;
    data: number[];
  }[];
};

export const ApexLineChart = ({ data }: ApexLineChartProps) => {
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  return (
    <Chart
      options={options}
      series={data}
      // Inconsistent with the JS documentation
      // There the type has to be defined in the options object
      // See: https://apexcharts.com/javascript-chart-demos/line-charts/basic/
      type="line"
      width={500}
      height={320}
    />
  );
};
