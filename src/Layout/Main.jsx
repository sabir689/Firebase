import { Outlet } from "react-router-dom";
import HEader from "../Components/Header/HEader";


const Main = () => {
    return (
        <div>
            <HEader></HEader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;