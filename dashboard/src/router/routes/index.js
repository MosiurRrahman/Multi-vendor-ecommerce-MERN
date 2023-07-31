import MainLayout from "../../layout/MainLayout"
import {privetRoutes} from "./privetRoutes"
export const getRoutes = ()=>{
    return{
        path:"/",
        element:<MainLayout/>,
        children : privetRoutes
    }
}