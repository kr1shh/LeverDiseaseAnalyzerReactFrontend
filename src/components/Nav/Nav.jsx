import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


const Nav = () => {
    const {pathname} = useLocation();
    if (pathname === "/") {
        return (
            <div className="logo" style={{justifyContent:"center"}}>
                <h1>
                    HepaHelp
                </h1>
            </div>
        )
    }else{
        return (
          <div className="logo">
            <Link to="/">
              <FaArrowLeft
              style={{
                marginLeft:"50px",
                color:"#003459",
                fontSize:"40px"
              }}/>
            </Link>
            <Link to="/">
              <h1 style={{
                color:"#003459",
                marginRight:"50px"
                }}>
                  HepaHelp
              </h1>
            </Link>
          </div>
        )
    }
}

export default Nav