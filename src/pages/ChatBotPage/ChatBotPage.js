import TopHeader from "../../components/topHeader/TopHeader";
import "./ChatBotPage.scss";
import { Link } from "react-router-dom";
export default function ChatBot() {
  return (
    <>
      <TopHeader heading="AmEx Assistant" subHeading="Our live AI will respond within seconds" color={true} dropShadow={false} />
    </>
  );
}
