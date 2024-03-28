import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import "../App.css";
import banner from '../assets/banner.jpg'


const Home = () => {
  // const [data, setData] = useState("initial data");

  // useEffect(() => {
  //   console.log("useEffect");
  //   async function fetchData() {
  //     const response = await fetch("data.json");
  //     const data = await response.json();
  //     setData(data.data[0].job_name);
  //     return data;
  //   }
  //   fetchData();
  // }, []);

  // async function handleSubmit() {
  //   console.log("submit");
  //   const response = await fetch("data.json");
  //   const data = await response.json();
  //   console.log("submit");
  //   setData(data.data[0].tag_categories[0]);
  //   return data;
  // }

  return (
    <>
    <Header />
    <main>
        <div className="container">
            <h1 className="header-home">
              Welcome to DreamNI
            </h1>
            <img src={banner} alt="banner" width={650}/>
            
        </div>
        </main>
    <Footer />
    </>
    )
}

export default Home;
