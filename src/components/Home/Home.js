import React from "react";
import "./Home.css";
import coxs from "../../images/Image/cox's-bazar.png"
import sajek from '../../images/Image/Sajek.png'
import sundarban from '../../images/Image/sundorbon.png'
import sreemangal from '../../images/Image/Sreemongol.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Header from "../Header/Header";
import { travelContext } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
    const {travelArea} = React.useContext(travelContext)
    const [place, setPlace] = travelArea;

  return (
    <div className="home-page">
      <div className="container">

        <Header></Header>

        <div className="home-wrapper">
            <div className="wrapper-info text-white">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..</p>
                <Link to={`/booking/${place}`}>
                <button className="btn btn-warning px-3 text-black">Booking <ArrowRightAltIcon/></button>
                </Link>
            </div>

            <div className="wrapper-img">
                <Link to={`/booking/${place}`}>
                <div className="img1" onClick={()=>setPlace("cox's bazar")}>
                    <div className='img-album'>
                        <img className="active" src={coxs} alt=""/>
                        <h3>COX'S BAZAR</h3>
                    </div>
                </div>
                </Link>

                <Link to={`/booking/${place}`}>
                <div className="img2" onClick={()=>setPlace("sreemangal")}>
                    <div className="img-album">
                        <img src={sreemangal} alt=""/>
                        <h3>SREEMANGAL</h3>
                    </div>
                </div>
                </Link>

                <Link to={`/booking/${place}`}>
                <div className="img3" onClick={()=>setPlace("sundarban's")}>
                    <div className="img-album">
                        <img src={sundarban} alt=""/>
                        <h3>SUNDARBAN'S</h3>
                    </div>
                </div>
                </Link>

                <Link to={`/booking/${place}`}>
                <div className="img4" onClick={()=> setPlace("sajek")}>
                    <div className="img-album">
                        <img src={sajek} alt=""/>
                        <h3>SAJEK</h3>
                    </div>
                </div>
                </Link>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
