import { victoryLineChartData } from "./data/victory";
import { rechartsLineChartData } from "./data/recharts";
import { reactChartsLineChartData } from "./data/reactCharts";

import { VictoryLineChart } from "./components/Victory/LineChart";
import { RechartsLineChart } from "./components/Recharts/LineChart";
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
    </div>
  );
}

export default App;
