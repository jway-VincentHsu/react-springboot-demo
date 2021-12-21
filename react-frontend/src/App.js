import "./App.css";
import EmployeeList from "./components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <EmployeeList></EmployeeList>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
