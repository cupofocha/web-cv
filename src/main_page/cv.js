import logo from "../logo.svg";
import "./css/cv.css";

export default function CV() {
    return (
        <div id="cv">
            <div id="portrait">
                <img id="portrait_img" src={logo} alt="portrait" />
                <div id="profile">
                    <h1 id="name">Xiangjiu Li</h1>
                    <h2 id="profile_title">Profile</h2>
                    <p id="profile_content">sdflkhasdl haslfkh alskfdhl kashflkhqwlkhfolqkhfo ihqwofi hqwof hqlwkh lkasdhflk ashflk haslkfhaslkfh alskfh alkshflaskhflakshfk</p>
                </div>
            </div>
            <div id="info">
                <div id="education">
                    <h1 id="edu">Education</h1>
                    <h4 id="degree">Ongoing Computer Science BSc</h4>
                    <div id="uni">
                        <img id="uni_icon" src={logo}></img>
                        <h3 id="uni_name">University of Debrecen</h3>
                    </div>
                    <h2 id="gpa">Last semester GPA: 4.0</h2>
                </div>
                <div id="awards_showcase">
                    <h1 id="award_title">Awards</h1>
                    <div id="award1" className="awards">
                        <h2 id="award1_name" className="award_name">Stipendium Hungaricum Scholarship</h2>
                        <p id="award1_org">Tempus Public Foundation [15 Jul 2020]</p>
                    </div>
                    <div id="award2" className="awards">
                        <h2 id="award2_name" className="award_name">Chinese Government Scholarship</h2>
                        <p id="award2_org" className="award_org">China Scholarship Council [3 Aug 2020]</p>
                    </div>
                </div>
                <h1 id="contact_title">Contact</h1>
                <div id="contact">
                    <div id="email">
                        <img id="email_icon" src={logo} className="contact_icon"></img>
                    </div>
                    <div id="linkedin">
                        <img id="linkedin_icon" src={logo} className="contact_icon"></img>
                    </div>
                    <div id="github">
                        <img id="github_icon" src={logo} className="contact_icon"></img>
                    </div>
                </div>
            </div>
        </div>
      );
}
