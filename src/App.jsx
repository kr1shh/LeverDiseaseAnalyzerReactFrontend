import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { Chat, Prediction, Home } from "./pages";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Layout/>}>
        <Route path="" element={<Home/>}></Route>
        <Route path="prediction" element={<Prediction/>}></Route>
        <Route path="chat" element={<Chat/>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={ router } />
}

export default App
