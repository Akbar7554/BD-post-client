
const MyBidsRow = ({ bid }) => {
    const { jobTitle, price, userEmail, buyerEmail, date } = bid
  return (
    <tr>
          <th>{ jobTitle}</th>
          <td>{ userEmail}</td>
          <td>{ date}</td>
          <td>Pending..</td>
          <th><button className="btn text-white bg-sky-500">Complete</button></th>
    </tr>
  )
}

export default MyBidsRow;