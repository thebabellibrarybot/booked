import Calendar from '../components/calendar';
import TimeofDay from '../components/timeofDay.js';
import ImageGrid from '../components/imageGrid';
import Radio from '../components/radioButtons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const BookingForm = () => {

    const { id } = useParams('prac');

    // get request to find all form info for this link

    // this is actually gonna be a api request to get this info
    const [bookingFormInfo, setBookingFormInfo] = useState({
        prac: id,
        adminInfo: '',
        tattooInfo: '',
    });
    const [userEntry, setUserEntry] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserEntry({...bookingFormInfo, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    
    return (
        <div>

            <div className="form-header ">
                {bookingFormInfo.adminInfo.nameImage ? <img src = {bookingFormInfo.adminInfo.nameImage}></img> : <h1>{bookingFormInfo.adminInfo.displayName}</h1>}
                {bookingFormInfo.adminInfobackgroundImage ? <img src = {bookingFormInfo.adminInfo.backgroundImage}></img> : null}
            </div>

            <div className="form-body">
                <p>First Name</p>
                <input></input>
                <p>Last Name</p>
                <input></input>
                <p>Email</p>
                <input></input>
                <p>Phone Number</p>
                <input></input>
            </div>

            <div className="form-body">
                {/* <Imagegrid options = bookingFormInfo.tattooInfo.flash/> */}
                {/* <Location on body entry /> */}
                {/* <Radio onSelect = handleChange() options = {bookingFormInfo?tattooInfo? : ['small', 'medium', 'large']}/> */}
                {/* <Deatils entry /> */}
                <Calendar/>
                <TimeofDay/>
            </div>

            <div className='waiver'>
                <p>click to say you've read and sign</p>
                <p>onclick datetime stamp</p>
            </div>

            <div className='deposits'>
                <p>deposit amount and venmo link with svg</p>
            </div>

        </div>
    )
}

export default BookingForm;