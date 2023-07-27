import './App.css';
import IncrementComponent from './Components/IncrementComponent';
import TodoList from './Components/TodoList';
import { FieldLevelValidationExample } from './Components/formil';
import Increment from './Components/increment';  


function App() {
  return (
    <>
      <Increment />
      <IncrementComponent />
      < TodoList />  
      < FieldLevelValidationExample />
    </>
  );
}

export default App;
