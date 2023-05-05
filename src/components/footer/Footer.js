import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <form>
        <label><p className="footer__label">Enter message</p></label>
        <input
          type="text"
          className="footer__text"
          placeholder="Please enter a message"
        />
      </form>
    </footer>
  );
}
