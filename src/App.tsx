import { rechartsLineChartData } from "./data/recharts";
import { reactChartsLineChartData } from "./data/reactCharts";

import { RechartsLineChart } from "./components/RechartsLineChart";
import { ReactChartsLineChart } from "./components/ReactChartsLineChart";

function App() {
  return (
    <div style={{ width: 800 }}>
      <h1>Recharts</h1>
      <RechartsLineChart data={rechartsLineChartData} />
      <ReactChartsLineChart data={reactChartsLineChartData} />
    </div>
  );
}

export default App;
