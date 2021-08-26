import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
