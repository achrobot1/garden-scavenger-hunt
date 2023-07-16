import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  StepOne, 
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepSeven,
  Win
} from './clue-steps/all-steps';

const router = createBrowserRouter([
  { path: "/", element: <StepOne /> },
  { path: "/two", element: <StepTwo /> },
  { path: "/three", element: <StepThree /> },
  { path: "/four", element: <StepFour /> },
  { path: "/five", element: <StepFive /> },
  { path: "/six", element: <StepSix /> },
  { path: "/seven", element: <StepSeven /> },
  { path: "/win", element: <Win /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
