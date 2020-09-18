import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import fakedata from '../../fakedata/Places/Places'
import { travelContext } from '../../App';
import './Booking.css'
import { Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

const Booking = () => {
    const classes = useStyles();

    const places = fakedata;
    const [travelPlace, setTravelPlace] = useState([])
    const {travelArea} = React.useContext(travelContext)
    const [place, setPlaces] = travelArea;

    useEffect(()=> {
        const matchPlace = places.filter(item=> item.name.toLowerCase() === place)
        setTravelPlace(matchPlace[0])
    },[place])
    // console.log(travelPlace)


    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <Header></Header>
                    <div className="booking-place">
                        <div className="place-info">
                            <h1>{travelPlace.name}</h1>
                            <p>{travelPlace.description}</p>
                        </div>
                        <div className="place-form">
                            <div className='form-item'>
                                <Form>
                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control defaultValue="Dhaka" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control defaultValue={travelPlace.name}/>
                                </Form.Group>

                                {/* <Form.Row>
                                  
                                </Form.Row> */}
                                <div className="d-flex justify-content-between">
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="From"
                                        type="date"
                                        defaultValue="2020-09-21"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>

                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="To"
                                        type="date"
                                        defaultValue="2020-09-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>
                                </div>
                                <Link to={`/search/${travelPlace.name}`}><button className='btn btn-warning start-booking-btn'>Start Booking</button></Link>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Booking;