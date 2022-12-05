// import logo from './logo.svg';
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div className="App max-w-[1440px] mx-auto bg-slate-200">
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
        </div>
    );
}

export default App;
