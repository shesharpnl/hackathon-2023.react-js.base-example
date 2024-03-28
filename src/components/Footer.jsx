import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import meetup from "../assets/meetup.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo_links">
        <img src={logo} alt="She Sharp Logo" className="footer-logo" />
      </div>
    </footer>
  );
}
