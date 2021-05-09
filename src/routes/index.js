import React from "react";
import {BrowserRouter} from "react-router-dom";
import {RouteWithSubRoutes} from "./config";
import Layout from "../layout";
import {routes} from "./routes";

function Router() {
  return <BrowserRouter basename="/portafolio">
    <Layout 
    routes={routes} 
    config={RouteWithSubRoutes} />
  </BrowserRouter>;
}

export default Router;
