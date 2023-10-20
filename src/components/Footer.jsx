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
        {/* Links to the website and github */}
        <ul>
          <li className="link-main-text">Useful Links</li>
          <li>
            <a href="https://www.shesharp.co/" target="blank">
              Our Website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shesharpnl/hackathon-2023.react-js.base-example"
              target="blank"
            >
              Check out the repo on Github
            </a>
          </li>
        </ul>

        {/* Links to the socials */}

        <div className="socials">
          <a href="https://www.facebook.com/SheSharpNL/" target="blank">
            <img src={facebook} alt="Facebook Logo" className="social-logo" />
          </a>
          <a href="https://www.instagram.com/shesharp.co/" target="blank">
            <img src={ig} alt="Instagram Logo" className="social-logo" />
          </a>
          <a href="https://www.linkedin.com/company/shesharp/" target="blank">
            <img src={linkedin} alt="Linkedin Logo" className="social-logo" />
          </a>
          <a href="https://twitter.com/sheSharpNL" target="blank">
            <img src={twitter} alt="Twitter Logo" className="social-logo" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCi-77kmSITumo5Sb9u9vKuA"
            target="blank"
          >
            <img src={youtube} alt="Youtube Logo" className="social-logo" />
          </a>

          <a href="https://www.meetup.com/SheSharp/" target="blank">
            <img src={meetup} alt="Meetup Logo" className="social-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
