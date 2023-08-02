
import { lazy } from "react";
const Category = lazy(()=>import("../../views/admin/Category"))
const Sellers = lazy(()=>import("../../views/admin/Sellers"))
const AdminDashboard = lazy(()=>import("../../views/admin/AdminDashboard"))
const Orders = lazy(()=>import("../../views/admin/Orders"))
const PaymentRequest = lazy(()=>import("../../views/admin/PaymentRequest"))

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
    ,
    {
        path:"admin/dashboard/category",
        element: <Category/>,
        ability:"admin"
    }
    ,
    {
        path:"admin/dashboard/sellers",
        element: <Sellers/>,
        ability:"admin"
    }
    ,
    {
        path:"admin/dashboard/payment-request",
        element: <PaymentRequest/>,
        ability:"admin"
    }
]