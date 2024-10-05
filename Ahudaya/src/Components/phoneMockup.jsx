
import './PhoneMockup.css';
// import phoneMockup from './phoneMockup.png'; 

const PhoneMockup = () => {
  return (
    <div className="phone-mockup">
      {/* <img src={phoneMockup} alt="Phone Mockup" className="phone-image" /> */}
      <div className="phone-content">
        <div className="content-box top-left">08<br />Applied</div>
        <div className="content-box top-right">68<br />Profile Matching</div>
        <div className="content-box middle">71<br />Scholarship & Internships</div>
        <div className="content-box bottom-left">82%<br />Plus+ Profile</div>
        <div className="content-box bottom-right">Chat with Expert</div>
      </div>
    </div>
  );
};

export default PhoneMockup;
