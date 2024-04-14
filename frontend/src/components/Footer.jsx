import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="landing-footer">
      <div className="icon">
        <img src="/ticon.png" alt="logo" />
        <h1>Soft Hand</h1>
      </div>

      <div className="socials">
        <div>
          <MdEmail size={20} />
          <p>softhand@gmail.com</p>
        </div>

        <div>
          <FaPhoneAlt size={20} />
          <p>+7 (707) 325 86 93</p>
        </div>

        <div>
          <FaLocationDot size={20} />
          <p>Satbayev University</p>
        </div>
      </div>
    </footer>
  );
}
