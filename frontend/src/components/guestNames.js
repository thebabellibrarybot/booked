import { useState } from "react";

const GuestNames = () => {

    const [guests, setGuests] = useState({});

    return (
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
    )


}
export default GuestNames;