import "./Home.scss"
import { Link } from "react-router-dom"
import Nav from "../../components/Nav/Nav"



const Home = () => {
  return (
    <>
    <div className="background">
      <Nav/>
      <div className="container">
        <p>
          Empowering <br/> Health Decisions
        </p><br/>
        <span>AI-Driven Liver Insights at Your Fingertips</span>

        <div className="btns">
          <Link to="prediction">
            <button>
              Check Up
            </button>
          </Link>

          <Link to="chat">
            <button>
              Talk to AI
            </button>
          </Link>

        </div>

      </div>
    </div>
    </>
  )
}

export default Home