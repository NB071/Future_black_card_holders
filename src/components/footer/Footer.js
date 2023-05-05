import "./Footer.scss";
import { motion } from "framer-motion";

export default function Footer() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.footer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.8 }}
      className="footer"
    >
      <form>
        <input
          type="text"
          className="footer__input"
          placeholder="Please enter a message..."
        />
      </form>
    </motion.footer>
  );
}
