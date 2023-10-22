import Calendar from '../components/calendar';
import ImageGrid from '../components/imageGrid';
import Radio from '../components/radioButtons';


const BookingForm = () => {

    const { id } = useParams('prac');

    // get request to find all form info for this link

    const [bookingFormInfo, setBookingFormInfo] = useState({
        prac: id,
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
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
        setUserEntry({...bookingForm, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    
    return (
        <div>

            <div className="form-header ">
                {bookingFormInfo?adminInfo?nameImage : <img src = {bookingFormInfo.adminInfo.nameImage}></img> : <h1>{bookingForm.adminInfo.displayName}</h1>}
                {bookingFormInfo?adminInfo?backgroundImage : <img src = {bookingFormInfo.adminInfo.backgroundImage}></img> : null}
            </div>

            <div className="form-body">
                {/* <Flash options/> */}
                {/* <Location on body entry /> */}
                {/* <Radio options = {bookingFormInfo?tattoInfo? : ['small', 'medium', 'large']}/> */}
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