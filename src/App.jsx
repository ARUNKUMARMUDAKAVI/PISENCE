import Navigation from "./components/navigation/navigation";
import Attendence from "./components/attendence/attendence";
import Chart from "./components/behavioral_analytics/chart";
import Homeworks from "./components/homeworks/homeworks";
import style from "./App.module.css";

function App() {
  return (
    <>
      <Navigation />
      <div className={style.container}>
        <Attendence />
        <Homeworks />
        <Chart />
      </div>
    </>
  );
}

export default App;
