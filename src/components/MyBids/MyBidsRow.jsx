const MyBidsRow = ({ bid }) => {
    const { jobTitle, price, userEmail, buyerEmail, date, status } = bid
  return (
    <tr>
          <th>{ jobTitle}</th>
          <td>{ userEmail}</td>
          <td>{ date}</td>
          {status === 'confirm' ? <td>Canceled</td> : <td>is Pending..</td>}
          <th>
              {status === 'confirm' ? <button>Disabled</button>:<button className="btn text-white bg-sky-500">Complete</button>}
          </th>
    </tr>
  )
}

export default MyBidsRow;