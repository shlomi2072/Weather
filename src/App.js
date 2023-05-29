import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import Zone from "./component/zone";

function App() {
  const [userChoose, setUserChoose] = useState("");
  const [locationOfUser , setLocationOfUser] = useState("")
  const [divOfLocationOfUser , setDivOfLocationOfUser] = useState("none")
  const [lonLat , setLonLat] = useState({
    lon : "" ,
    lat : ""
  })
  const handleChange = (event) => {
    setUserChoose(event.target.value)
  }
  function getLocation() {
    if (!navigator.geolocation) {
      console.log('Geolocation API not supported by this browser.');
    } else {
      console.log('Checking location...');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  function success(position) {
    // console.log(position)
    setLonLat(previousState => {
      return { ...previousState, lon: position.coords.longitude , lat:position.coords.latitude}
    })
    setDivOfLocationOfUser("block")
      console.log(lonLat)
  }
  function error() {
    alert("Inactive location or other problem")
  }
  //  console.log(userChoose);
  return (
    <div className="pageHome">
      <header style={{fontSize:"50px", color:"red" ,marginLeft:"120px"}}>
        WELCOME TO WORLD WEATHER WEBSITE
      </header> 
        <h1 style={{fontSize:"40px", color:"red" ,marginLeft:"170px"}}>Here you can get the weather anywhere</h1>
        <h2>What's the weather like in my place right now?</h2>
         <button id="get-location" onClick={getLocation}>Prees here to know</button>
         {
          lonLat.lat != "" &&
          <div style={{backgroundImage: `url("https://www.srugim.co.il/i/wp-content/uploads/2020/06/1-93__w650h331q80.jpg")`, display:divOfLocationOfUser}}>{<Zone typeRequest={"byLatLon"} lat={lonLat.lat} lon={lonLat.lon} />}</div>
          }
        <div className="areasConst" style={{display: "grid",  gridTemplateColumns: "auto auto auto"}}>
          <div style={{backgroundImage: `url("https://cdn-icons-png.flaticon.com/128/2728/2728338.png")`}}>{<Zone  city={"berlin"} typeRequest={"byNameCity"}/>}</div>
           <div style={{backgroundImage: `url("https://cdn-icons-png.flaticon.com/128/284/284489.png")`}}>{<Zone  city={"new york"} typeRequest={"byNameCity"}/>}</div>
            <div style={{backgroundImage: `url("https://cdn-icons.flaticon.com/png/128/3362/premium/3362633.png?token=exp=1659983230~hmac=d91ec648409a53c479298bd6cce4c543")`}}>{<Zone city={"london"} typeRequest={"byNameCity"}/>}</div>
             <div style={{backgroundImage: `url("https://t3.ftcdn.net/jpg/02/68/98/16/240_F_268981654_c7WXlg8APOK3ojg8V8zLXsQHneZ6XfG0.jpg")`}}>{<Zone city={"Moscow"} typeRequest={"byNameCity"}/>}</div>
              <div style={{backgroundImage: `url("https://t4.ftcdn.net/jpg/02/98/87/51/240_F_298875194_777EN2ZRi85mbcBMncf21eCPlsVvOovL.jpg")`}}>{<Zone city={"Tokyo"} typeRequest={"byNameCity"}/>}</div>
               <div style={{backgroundImage: `url("https://t3.ftcdn.net/jpg/03/17/32/84/240_F_317328407_iyJoQBNo0LRssnL7ZysjGkqUaVOLWBu5.webp")`}}>{<Zone city={"Johannesburg"} typeRequest={"byNameCity"}/>}</div>       
        </div>
        <h1 style={{margin:"0" , color:"aqua" , backgroundColor:"brown"}}>Choose another city</h1>
        <form style={{paddingBottom: "50px"}}>
      <select value={userChoose} onChange={handleChange}>
        <option >choose city</option>
        <option value="Rome">Rome</option>
        <option value="Athens">Athens</option>
        <option value="Boston">Boston</option>
        <option value="Washington">Washington</option>
        <option value="Paris">Paris</option>
        <option value="Sofia">Sofia</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Bangkok">Bangkok</option>
        <option value="New Orleans">New Orleans</option>
        <option value="Sydney">Sydney</option>
        <option value="Vienna">Vienna</option>
        <option value="Ankara">Ankara</option>
        <option value="Zefat">Zefat</option>
        <option value="Jerusalem">Jerusalem</option>
        <option value="Tiberias">Tiberias</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Azor">Azor</option>
        <option value="Bat Yam">Bat Yam</option>
        <option value="Bnei Brak">Bnei Brak</option>
        <option value="Giv'at Shmuel">Giv'at Shmuel</option>
        <option value="Givatayim">Givatayim</option>
        <option value="Herzliya">Herzliya</option>
        <option value="Herzliya Pituah">Herzliya Pituah</option>
        <option value="H̱olon">H̱olon</option>
        <option value="Jaffa">Jaffa</option>
        <option value="Kefar Shemaryahu">Kefar Shemaryahu</option>
        <option value="Or Yehuda">Or Yehuda</option>
        <option value="Ramat Gan">Ramat Gan</option>
        <option value="Ramat HaSharon">Ramat HaSharon</option>
        <option value="Tel Aviv">Tel Aviv</option>
        <option value="Venice">Venice</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Belgrade">Belgrade</option>
        <option value="Cairo">Cairo</option>
        <option value="Warsaw">Warsaw</option>
        <option value="Kyiv">Kyiv</option>
        <option value="Oslo">Oslo</option>
        <option value="Stockholm">Stockholm</option>
        <option value="purist">purist</option>
        <option value="Amman">Amman</option>
        <option value="Madrid">Madrid</option>
        <option value="Lisbon">Lisbon</option> 
        <option value="Ottawa">Ottawa</option>
        <option value="Montreal">Montreal</option>
        <option value="Chicago">Chicago</option>
        <option value="Santiago">Santiago</option>
        <option value="Buenos Aires">Buenos Aires</option>  
      </select>
     </form>
        {
          userChoose != ""  &&
           <div style={{backgroundImage: `url("https://hamechadesh.b-cdn.net/wp-content/uploads/elementor/thumbs/clouds-4258726_1920-piq9210qafdxb0y3h8u0tg10mi32vpfo8l7pyi7260.jpg")`}}>{<Zone city={userChoose} typeRequest={"byNameCity"}/>}</div>
        }
    </div> 
  );
}
export default App;
