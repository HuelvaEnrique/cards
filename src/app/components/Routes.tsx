import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
