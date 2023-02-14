import logo from "../logo.svg";
import "./css/cv.css";
import ud_logo from "../ud-logo.png";
import portrait from "../portrait.jpg";
import cv_bg from "./css/cv_bg.png";
import return_btn from "../return.png";

export default function CV() {

    let fullPage = false;

    function handleTabsMouthClicked(event) {
        let portrait = document.getElementById("portrait")
        let return_btn = document.getElementById("return_btn")
        let education = document.getElementById("education")
        let awards = document.getElementById("awards_showcase")
        let skills = document.getElementById("skills_container")
        let tabs = [education, awards, skills]

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] !== event.currentTarget) {
                tabs[i].style.right = "-50vw"
            }
        }

        event.currentTarget.style.width = "100vw"
        event.currentTarget.style.height = "100vh"
        event.currentTarget.style.right = "0"
        event.currentTarget.style.top = "0"
        event.currentTarget.style.borderRadius = "0"
        portrait.style.left = "-100vw"
        return_btn.style.left = "1vw"
    }

    function handleReturnBtnClicked() {
        let portrait = document.getElementById("portrait")
        let return_btn = document.getElementById("return_btn")
        let education = document.getElementById("education")
        let awards = document.getElementById("awards_showcase")
        let skills = document.getElementById("skills_container")
        let tabs = [education, awards, skills]

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.right = "-27%"
            tabs[i].style.width = "30%"
            tabs[i].style.height = "30%"
            tabs[i].style.borderRadius = "50px 0 0 50px"
        }
        tabs[0].style.top = "3%"
        tabs[1].style.top = "32%"
        tabs[2].style.top = "60%"
        portrait.style.left = "35%"
        return_btn.style.left = "-100vw"
    }

    function handleMouseEnter(event) {
        let education = document.getElementById("education")
        let awards = document.getElementById("awards_showcase")
        let skills = document.getElementById("skills_container")
        let tabs = [education, awards, skills]
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] == event.currentTarget && !fullPage) {
                tabs[i].style.right = "0"
            }
        }
    }

    function handleMouseLeave(event) {
        let education = document.getElementById("education")
        let awards = document.getElementById("awards_showcase")
        let skills = document.getElementById("skills_container")
        let tabs = [education, awards, skills]
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] == event.currentTarget && !fullPage) {
                tabs[i].style.right = "-27%"
            }
        }
    }

    return (
        <div id="cv">
            <img id="return_btn" src = {return_btn} onClick={handleReturnBtnClicked}/>
            <div id="portrait">
                <img id="portrait_img" src={portrait} alt="portrait" />
                <div id="profile">
                    <h1 id="name">Xiangjiu Li</h1>
                    <h2 id="profile_title">Profile</h2>
                    <p id="profile_content">This is a place holder for my profile. :)</p>
                </div>
            </div>
            <div id="info">
                <div id="education"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <div id="ud_logo">
                        <img id="ud_logo_img" src={ud_logo} alt="ud_logo" />
                    </div>
                    <h1 id="edu">Education</h1>
                    <h4 id="degree">Ongoing Computer Science BSc</h4>
                    <div id="uni">
                        <img id="uni_icon" src={logo}></img>
                        <h3 id="uni_name">University of Debrecen</h3>
                    </div>
                    <h2 id="gpa">Last semester GPA: 4.48/5</h2>
                </div>
                <div id="awards_showcase"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
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
                <div id="skills_container"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <h1 id="skills_title">Skills</h1>
                    <div id="skills">
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
        </div>
      );
}
