import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderD from '../Header/HeaderD';
import hotels from '../../fakedata/Places/hotels'
import Hotel from '../Hotel/Hotel';
import './Search.css'


const Search = () => {
    let {exactPath} = useParams()
    const hotelData = hotels;
    const [hotel, setHotel] = useState([])
    useEffect(() => {
        setHotel(hotelData)
    },[])

    return (
        <div>
            {/* <h2>This is search components {exactPath}</h2> */}
            <div>
                <div className="px-5">
                <HeaderD></HeaderD>
                </div>
                <hr/>
                <div className="search">
                    <div className="search-hotel">
                        {
                            hotel.map(item => <Hotel hotel={item} key={item.placeId}></Hotel>)
                        }
                    </div>
                    <div className="search-map">
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;