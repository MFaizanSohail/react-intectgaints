import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninForm from "./Components/SigninForm";
// import IncrementComponent from "./Components/IncrementComponent";
// import TodoList from "./Components/TodoList";
// import { FieldLevelValidationExample } from "./Components/formil";
// import Increment from "./Components/increment";

function App() {
	return (
		<>
			{/* <Increment />
			<IncrementComponent />
			<TodoList />
			<FieldLevelValidationExample /> */}
			<Router>
				<Routes>
					<Route element={<SigninForm />} path="/login" />
				</Routes>
			</Router>
		</>
	);
}

export default App;
