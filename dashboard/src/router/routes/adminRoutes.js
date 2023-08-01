
import { lazy } from "react";
const AdminDashboard = lazy(()=>import("../../views/admin/AdminDashboard"))
const Orders = lazy(()=>import("../../views/admin/Orders"))

export const adminRoutes = [
    {
        path:"admin/dashboard",
        element: <AdminDashboard/>,
        ability:"admin"
    },
    {
        path:"admin/dashboard/orders",
        element: <Orders/>,
        ability:"admin"
    }
]