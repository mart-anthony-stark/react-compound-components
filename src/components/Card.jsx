const Card = ({ children }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">{children}</div>
  );
};

Card.Actions = ({ onDelete, date }) => (
  <div className="card-actions justify-between">
    <div className="text-gray-500 pl-4">{date.toLocaleDateString()}</div>
    <button onClick={onDelete} className="btn btn-square btn-sm">
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
  </div>
);

const STATUS = ["Not Started", "In Progress", "Done"];
const COLOR = ["gray", "green", "blue"];
Card.Content = ({ card, changeStatus }) => (
  <div className="card-body items-center text-center">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.desc}</p>

    <details className="dropdown">
      <summary className="m-1 btn">Change Status</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {STATUS.map(
          (s) =>
            s !== card.status && (
              <li key={s} onClick={() => changeStatus(s)}>
                <a className={`text-${COLOR[STATUS.indexOf(s)]}-500`}>{s}</a>
              </li>
            )
        )}
      </ul>
    </details>
  </div>
);
export default Card;
