import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderD from '../Header/HeaderD';
import hotels from '../../fakedata/Places/hotels'
import Hotel from '../Hotel/Hotel';
import './Search.css'
import MapContainer from '../Map/Map';


const Search = () => {
    let {exactPath} = useParams()
    
    const hotelData = hotels;
    const [hotel, setHotel] = useState([])
    useEffect(() => {
        setHotel(hotelData)
    },[])

    return (
        <div>
            <div>
                <div className="px-5">
                <HeaderD></HeaderD>
                </div>
                <hr/>
                <div className="search">
                    <div className="search-hotel w-50">
                        {
                            hotel.map(item => <Hotel hotel={item} key={item.placeId}></Hotel>)
                        }
                    </div>
                    <div className="search-map w-50 rounded">
                        <MapContainer></MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;