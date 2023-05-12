import { Link } from "react-router-dom";

const ServiceCard = (p) => {
  const { _id, title, img, price } = p.service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 font-bold">Price: ${price}</p>
        <div className="card-actions ">
          <Link to={`/pages/check-out/${_id}`} ><button className="btn btn-primary">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
