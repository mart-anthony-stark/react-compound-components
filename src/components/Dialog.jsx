const Dialog = ({ id, children }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">{children}</div>
    </dialog>
  );
};

Dialog.Content = ({ title, message }) => {
  return (
    <>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="py-4">{message}</p>
    </>
  );
};

Dialog.Action = ({ okText = "Okay", onOk }) => {
  return (
    <div className="modal-action">
      <form method="dialog" className="flex gap-2">
        <button onClick={onOk} className="btn btn-primary">
          {okText}
        </button>
        <button className="btn">Cancel</button>
      </form>
    </div>
  );
};

export default Dialog;
