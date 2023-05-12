const BookingRow = ({ booking,handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, phone, date, service_title, price, img, status } = booking;


  

  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded h-20">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{phone}</td>
      <td>{service_title}</td>
      <td>{date}</td>
      <td>${price}</td>

      <th>
        {
          status==='confirm'?<span  className="text-primary">Confirmed</span>:
          <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please confirm</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
