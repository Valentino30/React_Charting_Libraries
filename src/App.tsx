import { nivoLineChartData } from "./data/nivo";
import { victoryLineChartData } from "./data/victory";
import { rechartsLineChartData } from "./data/recharts";
import { reactVisLineChartData } from "./data/reactVis";
import { reactChartsLineChartData } from "./data/reactCharts";

import { NivoLineChart } from "./components/Nivo/LineChart";
import { VictoryLineChart } from "./components/Victory/LineChart";
import { RechartsLineChart } from "./components/Recharts/LineChart";
import { ReactVisLineChart } from "./components/ReactVis/LineChart";
import { ReactChartsLineChart } from "./components/ReactCharts/LineChart";

function App() {
  return (
    <div style={{ width: 800 }}>
      <h1>React Charts JS 2</h1>
      <ReactChartsLineChart data={reactChartsLineChartData} />
      <h1>Recharts</h1>
      <RechartsLineChart data={rechartsLineChartData} />
      <h1>Victory</h1>
      <VictoryLineChart data={victoryLineChartData} />
      <h1>React Vis</h1>
      <ReactVisLineChart data={reactVisLineChartData} />
      <h1>Nivo</h1>
      <NivoLineChart data={nivoLineChartData} />
    </div>
  );
}

export default App;
