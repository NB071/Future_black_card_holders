import TopHeader from "../../components/topHeader/TopHeader";
import Footer from "../../components/footer/Footer";
import UserDialog from "../../components/userDialog/UserDialog";
import AIDialog from "../../components/AIDialog/AIDialog";
import CTAbuttons from "../../components/CTAbuttons/CTAbuttons";
import displayWidget from '../../scripts/displayWidget';
import "./ChatBotPage.scss";

import { Link } from "react-router-dom";
export default function ChatBot() {
  return (
    <>
      <TopHeader
        heading="AmEx Assistant"
        subHeading="Our live AI will respond within seconds"
        color={true}
        dropShadow={true}
      />
      <section className="chat-flow">
        <AIDialog prompt="Hi Jake, welcome to American express chat. I’m happy to help you today. Please select one of these options, or tell me what you need help with. " />
        <CTAbuttons prompt="Cancel a card"/>
        <CTAbuttons prompt="Request replacement Card"/>
        <CTAbuttons prompt="Fraud issue"/>
        <CTAbuttons prompt="Question about a transaction"/>
        <CTAbuttons prompt="Dispute a charge"/>
        <UserDialog prompt="Cancel a Card" />
      </section>
      <Footer />
      {displayWidget()}
    </>
  );
}
