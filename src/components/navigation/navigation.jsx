import nav from "./navigation.module.css";
import Sidebar from "../sidebar/sidebar";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";

const Navigation = () => {
  const [side, setSide] = useState(false);
  const showSide = () => setSide(!side);
  return (
    <>
      <div className={nav.navigation}>
        <CgDetailsMore onClick={showSide} />
      </div>
      {side ? <Sidebar /> : !side}
    </>
  );
};

export default Navigation;
