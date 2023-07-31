import { adminRoutes } from "./adminRoutes";
import { sellerRoutes } from "./sellerRoutes";

export const privetRoutes = [...adminRoutes, ...sellerRoutes];
