import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const {user} = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, price, title, img } = service;
    const handleBookServices = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const order = {
            customerName: name,
            email,
            phone,
            img,
            date,
            service_id: _id,
            service_title : title,
            price: price
        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("service Book successfully");
            }
        })
    }
    console.log(user?.email);
  return ( 
    <div>
      <div className="text-center">
      <h2 className="text-4xl font-bold text-orange-600">Booking service: {title}</h2>
      <p className="text-xl text-white mt-5 mb-10">Price: {price}</p>
      </div>
      <form onSubmit={handleBookServices}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            defaultValue={user?.displayName}
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            defaultValue={user?.email}
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="01XXXXXXXXX"
            name="phone"
            className="input input-bordered"
            required
          />
        </div>
        
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
