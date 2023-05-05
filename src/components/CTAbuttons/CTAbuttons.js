import "./CTAbuttons.scss"
export default function CTAbuttons({ prompt }) {
  return (
    <div className="CTA">
      <button className="CTA__button"><p>{prompt}</p></button>
    </div>
  );
}
