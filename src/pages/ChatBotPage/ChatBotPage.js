import TopHeader from "../../components/topHeader/TopHeader";
import Footer from "../../components/footer/Footer";
import UserDialog from "../../components/userDialog/UserDialog";
import AIDialog from "../../components/AIDialog/AIDialog";
import CTAbuttons from "../../components/CTAbuttons/CTAbuttons";
import CTAReturnToDashboard from "../../components/CTAReturnToDashboard/CTAReturnToDashboard";
import CTAoptions from "../../components/CTAoptions/CTAoptions";
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
        <CTAbuttons prompt="Cancel a card" />
        <CTAbuttons prompt="Request replacement Card" />
        <CTAbuttons prompt="Fraud issue" />
        <CTAbuttons prompt="Question about a transaction" />
        <CTAbuttons prompt="Dispute a charge" />
        <UserDialog prompt="Cancel a Card" />
        <CTAReturnToDashboard />
        <section className="chat-flow__CTA-options">
          <CTAoptions prompt="Example1 2023" />
          <CTAoptions prompt="Example2 2023" />
          <CTAoptions prompt="Example3 2023" />
          <CTAoptions prompt="Example4 2023" />
        </section>
      </section>
      <Footer />
    </>
  );
}
