import "./App.css";

import Form from "./components/form";
// import Form from "./components/formikform";

// import { FormValidation } from "./components/formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidationForm from "./components/validationform";
import Footer from "./components/Footer/Footer";
import FormValidation from "./components/Footer/validationform";
function App() {
  return (
    <div className="container">
      <FormValidation />
      {/* <FormValidation /> */}
      {/* <Footer /> */}
      {/* <ValidationForm /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
