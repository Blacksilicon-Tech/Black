import { RxInstagramLogo } from "react-icons/rx";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black flex justify-between items-center">
      <div>
        <b>Company</b>
        <p>About</p>
        <p>Jobs</p>
        <p>For the Record</p>
      </div>
      <div>
        <b>Communities</b>
        <p>For Artists</p>
        <p>Developers</p>
        <p>Advertising</p>
        <p>Investor</p>
        <p>Vendors</p>
      </div>
        <div>
            <b>Useful Links</b>
            <p>Support</p>
            <p>Free Mobile App</p>
        </div>
        <div>
            <b>Spotify Plans</b>
            <p>Premium Individual</p>
            <p>Premium Duo</p>
            <p>Premium Family</p>
            <p>Premium Student</p>
            <p>Spotify Free</p>
        </div>
        <div className="flex gap-3">
        <Link to='https://www.instagram.com/spotify/'><RxInstagramLogo /></Link>
        <Link to='https://x.com/spotify'><VscTwitter /></Link>
        <Link to='https://web.facebook.com/Spotify?_rdc=1&_rdr#'><FaFacebook /></Link>
        </div>
    </div>
  )
}

export default Footer
