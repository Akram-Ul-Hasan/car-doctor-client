const BookingRow = ({ booking }) => {
  const { customerName, phone, date, service_title, price, img } = booking;

  return (
   
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="w-20 rounded h-20">
              {
                img && <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
              }
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{phone}</td>
        <td>{service_title}</td>
        <td>{date}</td>
        <td>${price}</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
  );
};

export default BookingRow;
