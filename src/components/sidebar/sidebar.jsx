import sidebar from "./sidebar.module.css";
import { BiHome } from "react-icons/bi";
import { TbBooks } from "react-icons/tb";
import { GiCctvCamera } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <ul className={sidebar.items}>
        <li>
          <span>
            <BiHome />
          </span>
          Summary Dashboard
        </li>
        <li>
          <span>
            <TbBooks />
          </span>
          Attendence Tracking
        </li>
        <li>
          <span>
            <GiCctvCamera />
          </span>
          Behavioral Analytics
        </li>
        <li>
          <span>
            <FaBook />
          </span>
          Academic Performance Tracking
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
