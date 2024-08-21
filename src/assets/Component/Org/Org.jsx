import { Outlet} from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Org = () => {
  return (
    <>
   <div className="flex flex-col min-h-screen">
   <Header/>
   <div className="flex-grow">
   <Outlet/>
   </div>
    <Footer/>
   </div>
   
    </>
  )
}

export default Org