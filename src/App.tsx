import { victoryLineChartData } from "./data/victory";
import { rechartsLineChartData } from "./data/recharts";
import { reactChartsLineChartData } from "./data/reactCharts";

import { VictoryLineChart } from "./components/Victory/LineChart";
import { RechartsLineChart } from "./components/Recharts/LineChart";
import { ReactChartsLineChart } from "./components/ReactCharts/LineChart";
import { reactVisLineChartData } from "./data/reactVis";
import { ReactVisLineChart } from "./components/ReactVis/LineChart";

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
    </div>
  );
}

export default App;
