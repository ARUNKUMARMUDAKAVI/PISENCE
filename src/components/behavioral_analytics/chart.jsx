import data from "../../../data/data.json"
import { PieChart, Pie } from 'recharts';
import style from "./chart.module.css"

const Chart = () => {
    return (
      <>
        <div className={style.container}>
        <h1>Chart</h1>
        <PieChart width={200} height={200}>
            <Pie data={data["BehavioralAnalytics"]} dataKey="count" outerRadius={80} fill="#008000"/>
        </PieChart>
        </div>
      </>
    )
  }
  export default Chart;