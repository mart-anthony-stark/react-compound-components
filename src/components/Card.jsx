const Card = ({ children }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">{children}</div>
  );
};

Card.Actions = ({ onEdit, onDelete }) => (
  <div className="card-actions justify-end">
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

Card.Content = ({ name, desc }) => (
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{desc}</p>
  </div>
);
export default Card;
