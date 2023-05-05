import TopHeader from "../../components/topHeader/TopHeader";
import "./IndexPage.scss";
import { Link } from "react-router-dom";
import MessageIcon from "../../assets/icons/Chatbot.svg";
import infoIcon from "../../assets/icons/Info.svg";
import feedbackIcon from "../../assets/icons/Feedback.svg";
export default function IndexPage() {
  return (
    <>
      <TopHeader heading="Support" color={false} dropShadow={false} />
      <main className="support">
        <h1 className="support__heading">What can we do for you today?</h1>
        <div className="support__options">
          <div className="support__option-container">
            <Link to="/chat-bot">
              <div className="support__option-item">
                <img
                  className="support__option-icon"
                  src={MessageIcon}
                  alt="customer service icon"
                />
                <h3 className="support__option-text">Customer Service</h3>
              </div>
            </Link>
          </div>
          <div className="support__option-container">
            <div className="support__option-item">
              <img
                className="support__option-icon"
                src={infoIcon}
                alt="FAQ icon"
              />
              <h3 className="support__option-text">
                Frequently Asked Questions
              </h3>
            </div>
          </div>
          <div className="support__option-container">
            <div className="support__option-item">
              <img
                className="support__option-icon"
                src={feedbackIcon}
                alt="FAQ icon"
              />
              <h3 className="support__option-text">Leave Feedback</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
