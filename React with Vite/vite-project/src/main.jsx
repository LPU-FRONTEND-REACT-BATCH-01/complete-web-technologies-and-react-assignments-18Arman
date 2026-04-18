//importing createRoot(virtual Dom point) from reactDom/client to join virtualDom and actual Dom
import {createRoot} from "react-dom/client"
//we can only render one component inside a render So, we will give all components
//in app.jsx file and then give that to this root
import App from './App'
createRoot(document.getElementById("root")).render(
    <App/>
)