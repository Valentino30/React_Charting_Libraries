import { rechartsLineChartData } from "./utils";
import { RechartsLineChart } from "./components/RechartsLineChart";

function App() {
  return (
    <div>
      <h1>Recharts</h1>
      <RechartsLineChart data={rechartsLineChartData} />
    </div>
  );
}

export default App;
