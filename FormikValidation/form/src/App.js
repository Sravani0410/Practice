import "./App.css";
import Form from "./components/form";
// import Form from "./components/formikform";
import { FormValidation } from "./components/formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidationForm from "./components/validationform";
function App() {
  return (
    <div className="container">
      <FormValidation />
      {/* <ValidationForm /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
