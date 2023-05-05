import "./UserDialog.scss";

export default function UserDialog({ prompt }) {
  return (
    <div className="user-dialog">
      <div className="user-dialog__container">
        <div className="user-dialog__frame-wapper">
          {prompt && <p className="user-dialog__text">{prompt}</p>}
        </div>
        {prompt && (
          <p className="user-dialog__date">
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        )}
      </div>
    </div>
  );
}
