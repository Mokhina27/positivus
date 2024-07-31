import linkedin from '../assets/images/footer-icon1.svg'
import facebook from '../assets/images/footer-icon2.svg'
import twitter from '../assets/images/footer-icon3.svg'

const Footer = () => {
  

  return (
    <>
        <footer className="footer">
            <div className="footer__nav">
                <a href="" className="footer__logo">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon" clipPath="url(#clip0_966_152)">
                    <path id="Vector" d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_966_152">
                    <rect width="29.5167" height="29" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                <a className="footer__title">Positivus</a>
                </a>
                <ul className="footer__list">
                    <li>
                        <a href="" className="footer__list_link">About us</a>
                    </li>
                    <li>
                        <a href="" className="footer__list_link">Services</a>
                    </li>
                    <li>
                        <a href="" className="footer__list_link">Use Cases</a>
                    </li>
                    <li>
                        <a href="" className="footer__list_link">Pricing</a>
                    </li>
                    <li>
                        <a href="" className="footer__list_link">Blog</a>
                    </li>
                </ul>
                <ul className="footer__list_logos">
                    <li>
                        <a href="" className="footer__list_logo">
                            <img src={linkedin} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list_logo">
                            <img src={facebook} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list_logo">
                            <img src={twitter} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__box">
                <div className="footer__box_right">
                    <h2 className="footer__box_title">Contact us:</h2>
                    <p className="footer__box_text">Email: info@positivus.com</p>
                    <p className="footer__box_text">Phone: 555-567-8901</p>
                    <p className="footer__box_text">
                        Address: 1234 Main St
                    </p>
                    <p className="footer__box_text ft">
                        Moonstone City, Stardust State 12345
                    </p>
                </div>
                <div className="footer__box_left">
                    <input type="text" className="footer__box_input" placeholder='Email'/>
                    <button className="footer__box_btn">Subscribe to news</button>
                </div>
            </div>
            <div className="footer__texts">
                <p className="footer__text">© 2023 Positivus. All Rights Reserved.</p>
                <p className="footer__text2">Privacy Policy</p>
            </div>
        </footer>
    </>
  )
}

export default Footer