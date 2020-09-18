import React from 'react';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import './Hotel.css'

const Hotel = (props) => {
    const hotel = props.hotel;

    return (
        <div>
            <div className="row">
                <div className="col-md-5 search-hotel-img p-3">
                    <img src={hotel.img} alt=""/>
                </div>
                <div className="col-md-7 search-hotel-info p-3">
                    <h4>{hotel.title}</h4>
                    <p>{hotel.guust} guests {hotel.bedroom} bedrooms {hotel.bed} beds {hotel.bath} baths</p>
                    <p>{hotel.kitchen}</p>
                    <p>{hotel.detail}</p>
                    <span><GradeRoundedIcon color={"primary"}></GradeRoundedIcon> {hotel.rating}  </span>
                    <span>  ${hotel.pricePerNight}/night</span>
                </div>
            </div>
        </div>
    );
};

export default Hotel;