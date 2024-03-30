import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div >
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
