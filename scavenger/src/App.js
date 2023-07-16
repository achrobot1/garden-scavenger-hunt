import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {StepOne, StepTwo} from './clue-steps/all-steps';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StepOne />
  },
  {
    path: "/two",
    element: <StepTwo />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
