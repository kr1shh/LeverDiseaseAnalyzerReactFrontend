import "./Prediction.scss";
import { WiStars } from "react-icons/wi";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";


const Prediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    total_bilirubin: "",
    direct_bilirubin: "",
    alkaline_phosphotase: "",
    alamine_aminotransferase: "",
    total_proteins: "",
    albumin: "",
    albumin_and_globulin_ratio: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false)
  const url = "http://127.0.0.1:8000/";



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post(`${url}predict/`, formData);
      setResult(response.data.message);      
    }
     catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while analyzing the data.");
    }
    setLoading(false)
  };

  return (
    <>
      <Nav />
      <div className="prediction_container">
        <div className="title">
          <h2>Provide your details to analyze.</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" required value={formData.age} onChange={handleInputChange}/>
            
            <label htmlFor="gender">Gender</label>
            <div className="gender">
              <span>Male</span>
              <input type="radio" id="male" name="gender" required value="1" onChange={handleInputChange} checked={formData.gender === "1"} />
              <span>Female</span>
              <input type="radio" id="female" name="gender" required value="0" onChange={handleInputChange} checked={formData.gender === "0"} />
            </div>
            
            <label htmlFor="total_bilirubin">Total Bilirubin</label>
            <input type="number" id="total_bilirubin" name="total_bilirubin" required value={formData.total_bilirubin} onChange={handleInputChange} />
            
            <label htmlFor="direct_bilirubin">Direct Bilirubin</label>
            <input type="number" id="direct_bilirubin" name="direct_bilirubin" required value={formData.direct_bilirubin} onChange={handleInputChange} />
            
            <label htmlFor="alkaline_phosphotase">Alkaline Phosphotase</label>
            <input type="number" id="alkaline_phosphotase" name="alkaline_phosphotase" required value={formData.alkaline_phosphotase} onChange={handleInputChange} />
            
            <label htmlFor="alamine_aminotransferase">Alamine Aminotransferase</label>
            <input type="number" id="alamine_aminotransferase" name="alamine_aminotransferase" required value={formData.alamine_aminotransferase} onChange={handleInputChange} />
            
            <label htmlFor="total_proteins">Total Proteins</label>
            <input type="number" id="total_proteins" name="total_proteins" required value={formData.total_proteins} onChange={handleInputChange} />
            
            <label htmlFor="albumin">Albumin</label>
            <input type="number" id="albumin" name="albumin" required value={formData.albumin} onChange={handleInputChange} />
            
            <label htmlFor="albumin_and_globulin_ratio">Albumin and Globulin Ratio</label>
            <input type="number" id="albumin_and_globulin_ratio" name="albumin_and_globulin_ratio" required value={formData.albumin_and_globulin_ratio} onChange={handleInputChange} />
            
            <button type="submit">
              Analyze <WiStars style={{ fontSize: "30px" }} />
            </button>
          </div>
        </form>
      </div>

      {
        loading&&
        <div style={{
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Loading/>
        </div>
      }

      {result && (
        <div className="analysis">
          <h1>Result</h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom:"100px"
            }}
          >{result}</p>
        </div>
      )}
    </>
  );
};

export default Prediction;