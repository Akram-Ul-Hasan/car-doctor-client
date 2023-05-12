import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [refresh, SetRefresh] = useState(true);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url,refresh]);
 
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want ro delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            SetRefresh(!refresh);
          }
        });
    }
  };
  const handleBookingConfirm= id =>{
    const proceed = confirm("Are you sure, You want to proceed?");
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'PATCH',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
          const remaining = bookings.filter(booking => booking._id !==id);
          const updated = bookings.find(booking => booking._id ===id);
          updated.status = 'confirm';
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      })
    }
  }
  return (
    <div>
      <h2>Total Order: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Phone</th>
              <th>service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
