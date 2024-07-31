import service1 from '../assets/images/service1.svg'
import service2 from '../assets/images/service2.svg'
import service3 from '../assets/images/service3.svg'
import service4 from '../assets/images/service4.svg'
import service5 from '../assets/images/service5.svg'
import service6 from '../assets/images/service6.svg'
import arrow1 from '../assets/images/arrow1.svg'
import arrow2 from '../assets/images/arrow2.svg'


const Services = () => {
  return (
    <>
        <div className="services">
            <div className="services__info">
                <h3 className="services__title">Services</h3>
                <p className="services__text">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
            </div>
            <div className="services__boxes">
                <div className="services__box">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title">
                                Search engine
                            </h3>
                            <span>optimization</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow1} alt="" />
                            <p className="services__box_text">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service1} alt="" />
                    </div>
                </div>
                <div className="services__box green">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title text">
                                Pay-per-click 
                            </h3>
                            <span className='green__text'>advertising</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow1} alt="" />
                            <p className="services__box_text">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service2} alt="" />
                    </div>
                </div>
                <div className="services__box black">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title text2">
                                Social Media 
                            </h3>
                            <span className='black__text'>Marketing</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow2} alt="" />
                            <p className="services__box_text text3">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service3} alt="" />
                    </div>
                </div>
                <div className="services__box">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title">
                                Search engine 
                            </h3>
                            <span>optimization</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow1} alt="" />
                            <p className="services__box_text">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service4} alt="" />
                    </div>
                </div>
                <div className="services__box green">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title text">
                                Content 
                            </h3>
                            <span className='green__text'>Creation</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow1} alt="" />
                            <p className="services__box_text">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service5} alt="" />
                    </div>
                </div>
                <div className="services__box black">
                    <div className="services__content">
                        <div className="services__box_info">
                            <h3 className="services__box_title text2">
                                Analytics and 
                            </h3>
                            <span className='black__text'>Tracking</span>
                        </div>
                        <a className="services__box_link">
                            <img src={arrow2} alt="" />
                            <p className="services__box_text text3">Learn more</p>
                        </a>
                    </div>
                    <div className="services__box_img">
                        <img src={service6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services