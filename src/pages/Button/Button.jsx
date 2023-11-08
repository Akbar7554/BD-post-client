
const Button = ({ menuItems, setCategory, filterItems }) => {
  return (
    <div className="md:w-[50%] md:mx-auto">
      {menuItems.map((val) => (
        <button
          onClick={() => filterItems(val)}
          key={val._id}
          className="btn bg-[#31A8EB] text-white ml-5 mb-10"
        >
          {val}
        </button>
      ))}
    </div>
  )
}

export default Button;