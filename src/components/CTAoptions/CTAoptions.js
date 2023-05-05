import "./CTAoptions.scss"
export default function CTAoptions({prompt}) {
  return (
    <div className="CTA-option">
      <button className="CTA-option__button">
        <p>{prompt}</p>
      </button>
    </div>
  );
}
