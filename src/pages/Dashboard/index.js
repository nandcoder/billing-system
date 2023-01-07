import React from "react";
import { Switch, Route } from "react-router-dom";
import OffcanvasExample from "../../components/Navbar";
import Profile from "./Sections/Profile";
import Home from "./Home"
import Users from "./Users"
import Transactions from "./Transactions"

const Dashboard = () => {
  return (
    // <div className={classes.root}>
    //   <main className={classes.content}>
    //     <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/dashboard/transactions/" component={Transactions} />
          <Route exact path="/dashboard/users/" component={Users} />
        </Switch>

    //   </main>
    // </div>
  );
}

export default Dashboard