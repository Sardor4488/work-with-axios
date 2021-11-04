import logo from "./logotip.jpg";
import AppCss from "./AppCss";
import { Link, Route, Switch } from "react-router-dom";
import Books from "./pages/books";
function App() {
  return (
    <AppCss>
      <div className=" ">
        <div className="container_Fluid d-flex  w-100">
          <div className="sidebar shadow ">
            <h4 className="p-3">Logotip </h4>
            <div>
              <Link to="/books">books</Link>
            </div>
          </div>
          <div className="content">
            <header className="w-100 bg-white py-3 shadow">
              <div className="container d-flex justify-content-between align-items-center w-100">
                <img className="logotip" src={logo} alt="" />
                <div>
                  <input type="text" className="input" />
                  <button>Submit</button>
                </div>
              </div>
            </header>
            <div className="p-3">
              <h1>content</h1>
              <Switch>
                <Route path="/books">
                  <Books></Books>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </AppCss>
  );
}

export default App;
