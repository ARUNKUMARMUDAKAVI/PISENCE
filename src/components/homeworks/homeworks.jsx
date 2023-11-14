import data from "../../../data/data.json";
import style from "./homeworks.module.css";

const Homeworks = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Homeworks</h1>
        <div className={style.items}>
          <span>{data["homework"][0]}</span>
          <span>{data["homework"][1]}</span>
          <span>{data["homework"][2]}</span>
        </div>
      </div>
    </>
  );
};

export default Homeworks;
