import { useState } from 'react';


const cardsData = [
    { 
        id: '01', 
        title: 'Consultation', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
    { 
        id: '02', 
        title: 'Research and Strategy', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
    { 
        id: '03',
        title: 'Implementation', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
    { 
        id: '04', 
        title: 'Monitoring and Optimization', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
    { 
        id: '05', 
        title: 'Reporting and Communication', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
    { 
        id: '06', 
        title: 'Continual Improvement', 
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' 
    },
];

function Process() {
  const [expandedCards, setExpandedCards] = useState(Array(cardsData.length).fill(false));

  const handleToggle = (index) => {
    setExpandedCards(prevState => 
      prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <div className="process">
      {cardsData.map((card, index) => (
        <div 
          key={card.id}
          className={`process__box ${expandedCards[index] ? 'expanded' : ''}`}
          style={{ 
            backgroundColor: expandedCards[index] ? '#B9FF66' : '#F3F3F3', 
            // height: expandedCards[index] ? '200px' : '160px'
          }}
        >
          <div className="process__box_content">
            <div className="process__box_info">
              <h2 className="process__box_number">{card.id}</h2>
              <h3 className="process__box_title">{card.title}</h3>
            </div>
            <div className="process__box_button">
              <button className="process__box_btn" onClick={() => handleToggle(index)}>
                {expandedCards[index] ? '-' : '+'}
              </button>
            </div>
          </div>
          <div className="line2"></div>
          <div className="process__text">
            {expandedCards[index] && (
              <p className="process__box_text">
                {card.text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


            {/* <div className="process__box" style={{ backgroundColor: hidden ? '#B9FF66' : '#F3F3F3' }}>
                <div className="process__box_content">
                    <div className="process__box_info">
                        <h2 className="process__box_number">02</h2>
                        <h3 className="process__box_title">Consultation</h3>
                    </div>
                    <div className="process__box_button">
                    <button className="process__box_btn" onClick={handleToggle}>
                        { hidden ? '-' : '+' }
                    </button>
                </div>
                </div>
                <div className="line2"></div>
                <div className="process__text">
                    { hidden &&  
                    <p className="process__box_text">
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                    }
                </div>
            </div>
            <div className="process__box" style={{ backgroundColor: hidden ? '#B9FF66' : '#F3F3F3' }}>
                <div className="process__box_content">
                    <div className="process__box_info">
                        <h2 className="process__box_number">03</h2>
                        <h3 className="process__box_title">Consultation</h3>
                    </div>
                    <div className="process__box_button">
                    <button className="process__box_btn" onClick={handleToggle}>
                        { hidden ? '-' : '+' }
                    </button>
                </div>
                </div>
                <div className="line2"></div>
                <div className="process__text">
                    { hidden &&  
                    <p className="process__box_text">
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                    }
                </div>
            </div>
            <div className="process__box" style={{ backgroundColor: hidden ? '#B9FF66' : '#F3F3F3' }}>
                <div className="process__box_content">
                    <div className="process__box_info">
                        <h2 className="process__box_number">04</h2>
                        <h3 className="process__box_title">Consultation</h3>
                    </div>
                    <div className="process__box_button">
                    <button className="process__box_btn" onClick={handleToggle}>
                        { hidden ? '-' : '+' }
                    </button>
                </div>
                </div>
                <div className="line2"></div>
                <div className="process__text">
                    { hidden &&  
                    <p className="process__box_text">
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                    }
                </div>
            </div>
            <div className="process__box" style={{ backgroundColor: hidden ? '#B9FF66' : '#F3F3F3' }}>
                <div className="process__box_content">
                    <div className="process__box_info">
                        <h2 className="process__box_number">05</h2>
                        <h3 className="process__box_title">Consultation</h3>
                    </div>
                    <div className="process__box_button">
                    <button className="process__box_btn" onClick={handleToggle}>
                        { hidden ? '-' : '+' }
                    </button>
                </div>
                </div>
                <div className="line2"></div>
                <div className="process__text">
                    { hidden &&  
                    <p className="process__box_text">
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                    }
                </div>
            </div> */}
//         </div>
//     </>
//   )
// }

export default Process