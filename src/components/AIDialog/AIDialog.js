import "./AIDialog.scss";

export default function UserDialog({ prompt }) {
  return (
    <div className="AI-dialog">
      <div className="AI-dialog__container">
        {prompt && <p className="AI-dialog__text">{prompt}</p>}
      </div>
      {prompt && (
        <p className="AI-dialog__date">
          {new Date().toLocaleString("en-US", {
           hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      )}
    </div>
  );
}
