import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Spinner from "./components/common/Spinner";

//Components
const SignUp = lazy(() => import("./pages/SignUp"));

const Common: FC = () => {
  return (
    <Suspense
      fallback={
        <div>
          <div className="centered">
            <Spinner size="lg" />
          </div>
        </div>
      }
    >
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Redirect exact from="/" to="/signup" />
      </Switch>
    </Suspense>
  );
};

export default Common;
