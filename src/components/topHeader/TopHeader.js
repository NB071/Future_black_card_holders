import "./TopHeader.scss";
import Arrow from "../../assets/icons/Back Arrow.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function TopHeader({ heading, subHeading, color, dropShadow }) {
  const navigate = useNavigate();
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.header
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.8 }}
      className={`header ${color ? "header--light" : ""} ${
        dropShadow ? "header--shadow" : ""
      }`}
    >
      <img
        onClick={() => navigate(-1)}
        className="header__arrow"
        src={Arrow}
        alt="Back Button"
      />
      <div className="header__texts">
        {heading && <h2 className="header__heading-text">{heading}</h2>}
        {subHeading && <p className="header__sub-heading-text">{subHeading}</p>}
      </div>
    </motion.header>
  );
}
