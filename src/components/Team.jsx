import team1 from '../assets/images/team1.svg'
import team2 from '../assets/images/team2.svg'
import team3 from '../assets/images/team3.svg'
import team4 from '../assets/images/team4.svg'
import team5 from '../assets/images/team5.svg'
import team6 from '../assets/images/team6.svg'
import linkedin from '../assets/images/linkedin-icon.svg'

const usersData = [
    {
        id: 1,
        name: 'John Smith',
        role: 'CEO and Founder',
        text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        img: team1,
        icon: linkedin
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'Director of Operations',
        text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        img: team2,
        icon: linkedin
    },
    {
        id: 3,
        name: 'Michael Brown',
        role: 'Senior SEO Specialist',
        text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        img: team3,
        icon: linkedin
    },
    {
        id: 4,
        name: 'Emily Johnson',
        role: 'PPC Manager',
        text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        img: team4,
        icon: linkedin
    },
    {
        id: 5,
        name: 'Brian Williams',
        role: 'Social Media Specialist',
        text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        img: team5,
        icon: linkedin
    },
    {
        id: 6,
        name: 'Sarah Kim',
        role: 'Content Creator',
        text: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        img: team6,
        icon: linkedin
    },
]

const Team = () => {
  return (
    <div className="team">
        <div className="team__content">
            <h2 className="team__title">Team</h2>
            <p className="team__text">
                Meet the skilled and experienced team behind our successful digital marketing strategies
            </p>
        </div>
        <div className="team__boxes">
            {usersData.map((user, id) => (
                <div className="team__box" key={id}>
                    <div className="team__box_content">
                        <img className='team__box_img' src={user.img} alt="" />
                        <img src={user.icon} alt="" className="team__box_icon" />
                        <div className="team__box_info">
                            <h1 className='team__box_name' >{user.name}</h1>
                            <p className='team__box_role' >{user.role}</p>
                        </div>
                    </div>
                    <div className="team__box_texts">
                        <p className="team__box_text">{user.text}</p>
                    </div>

                </div>
            ))}
        </div>
        <div className="team__button">
            <button className="team__btn">See all team</button>
        </div>
    </div>
  )
}

export default Team