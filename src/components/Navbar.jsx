

const Navbar = () => {
    
  return (
    <nav className="nav">
        <div className="nav__box">
            <div className="nav__logo">
            <svg className="nav__logo" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_903_42)">
                <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_903_42">
                <rect width="36" height="36" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <a className="nav__title">Positivus</a>
            </div>
            <ul className='nav__list'>
                <li>
                    <a href="#" className="nav__link">About us</a>
                </li>
                <li>
                    <a href="#" className="nav__link">Services</a>
                </li>
                <li>
                    <a href="#" className="nav__link">Pricing</a>
                </li>
                <li>
                    <a href="#" className="nav__link">Blog</a>
                </li>
                <li>
                    <a href="#" className="nav__link"><span className="link__span">Request a quote</span></a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar