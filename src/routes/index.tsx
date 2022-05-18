import { Sidebar } from "@/components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sidebarRoutes from "./sidebar";
import { PropsRoute } from "./types";

const RouteConfig = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <Router>
        <Sidebar data={sidebarRoutes} />
        <Routes>
          {sidebarRoutes.map(
            (route: PropsRoute) =>
              !!route.main && (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.main title={route.title} />}
                />
              )
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default RouteConfig;
