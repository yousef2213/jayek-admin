import { useContext } from 'react';
import {Route, Switch} from 'react-router-dom'
import { JayAdminContext } from './context/context.js';


// admin
import LoginAdmin from './pages/Admin/Login.js';
import ForgetPass from './pages/Admin/ForgetPassword.js';
import SetNewPass from './pages/Admin/NewPass.js';
import Admin from './pages/Admin/admin.js';
import Loading from './components/Loading.js';

function App() {
  const {activeAdmin} = useContext(JayAdminContext);


  window.addEventListener("load",function(){
    document.querySelector(".loading").classList.add("hideloader");
  })
  const NoMatch = ({ location }) => (
    <div className="container py-5">
      <div className="row mx-0">
        <div className="col-10 mx-auto text-center">
          <h1 className="text-muted pt-4">404</h1>
          <h3 className="text-muted py-1">
            No match for <code>{location.pathname}</code> can be found.
          </h3>
          <a href="/" className="btn btn-primary">Return To Home</a>
        </div>
      </div>
    </div>
  );
  if(activeAdmin) {
    return (
      <div className="position-relative">
        <Loading />
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route path="/login" component={Admin} />
          <Route path="/home" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }else {
    return (
      <div className="position-relative">
        <Loading />
        <Switch>
          {/* admin pages */}
          <Route exact path="/" component={LoginAdmin} />
          <Route path="/login" component={LoginAdmin} />
          <Route path="/forget-password" component={ForgetPass} />
          <Route path="/new-password/:token" component={SetNewPass} />
          <Route component={NoMatch} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
