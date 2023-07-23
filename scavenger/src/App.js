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

const routerDev = createBrowserRouter([
  { path: "/", element: <StepOne /> },
  { path: "/two", element: <StepTwo /> },
  { path: "/three", element: <StepThree /> },
  { path: "/four", element: <StepFour /> },
  { path: "/five", element: <StepFive /> },
  { path: "/six", element: <StepSix /> },
  { path: "/seven", element: <StepSeven /> },
  { path: "/win", element: <Win /> },
]);

const router = createBrowserRouter([
  { path: "/", element: <StepOne /> },
  { path: "/fehZKsFjbt4=", element: <StepTwo /> },
  { path: "/GQi7p661xtY=", element: <StepThree /> },
  { path: "/CxHgr7ub36s=", element: <StepFour /> },
  { path: "/LO17fcdWaf8=", element: <StepFive /> },
  { path: "/pnFP4LMjMQQ=", element: <StepSix /> },
  { path: "/yxo7sXYube4=", element: <StepSeven /> },
  { path: "/LmJCa50OjJU=", element: <Win /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
