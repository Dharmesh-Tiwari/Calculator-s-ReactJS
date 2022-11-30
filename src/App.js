import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import NoPage from "./NoPage";
import Calculator1 from "./Calculator1";
import Calculator2 from "./Calculator2";


const App=()=>
{
return(
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />} >
  <Route index element={<Home />} />
  <Route path="Calculator1" element={<Calculator1 />} />
  <Route path="Calculator2" element={<Calculator2 />} />
  <Route path="*"           element={<NoPage />} />
  
</Route>
</Routes>
</BrowserRouter>

 );
}
export default App;