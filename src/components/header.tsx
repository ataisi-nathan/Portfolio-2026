import profile from '../assets/profile-image.png'

const Header = () => {
    return (
        <header>
            <div className="profile">
                <img src={profile} alt="Profile Picture" />
                <div className="profile-detail">
                    <b>Ataisi Nathan</b>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </header>
    )
}

export default Header;