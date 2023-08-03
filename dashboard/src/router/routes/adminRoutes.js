
import { lazy } from "react";
const Category = lazy(()=>import("../../views/admin/Category"))
const Sellers = lazy(()=>import("../../views/admin/Sellers"))
const AdminDashboard = lazy(()=>import("../../views/admin/AdminDashboard"))
const Orders = lazy(()=>import("../../views/admin/Orders"))
const PaymentRequest = lazy(()=>import("../../views/admin/PaymentRequest"))
const SellerRequest = lazy(()=>import("../../views/admin/SellerRequest"))
const DeactiveSellers = lazy(()=>import("../../views/admin/DeactiveSellers"))
const SellerDetails = lazy(()=>import("../../views/admin/SellerDetails"))
const ChatSeller = lazy(()=>import("../../views/admin/ChatSeller"))
const OrderDetails = lazy(()=>import("../../views/admin//OrderDetails "))

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
    ,
    {
        path:"admin/dashboard/deactive-sellers",
        element: <DeactiveSellers/>,
        ability:"admin"
    }
    ,
    {
        path:"admin/dashboard/sellers-request",
        element: <SellerRequest/>,
        ability:"admin"
    },
    {
        path:"admin/dashboard/seller/details/:sellerId",
        element: <SellerDetails/>,
        ability:"admin"
    }
    ,
    {
        path:"admin/dashboard/chat-sellers",
        element: <ChatSeller/>,
        ability:"admin"
    }
    ,
    {
        path:"admin/dashboard/order/details/:orderId",
        element: <OrderDetails/>,
        ability:"admin"
    }
]