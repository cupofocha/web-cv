import logo from "../logo.svg";
import "./css/cv.css";
import ud_logo_img from "../ud-logo.png";
import portrait_img from "../portrait.jpg";
import return_btn_img from "../return.png";
import trophy_img from "../trophy.svg";
import java_file_icon from "../java-iconsvg.svg";
import email_img from "../mail-icon.svg";
import linkedin_img from "../linkedin_icon.svg";
import {useEffect} from "react";

export default function CV() {

    let fullPage = false
    let currentTab = null
    let flip = false
    let portrait
    let return_btn
    let education
    let awards
    let skills_container
    let tabs
    let edu_info
    let edu_title
    let award_info
    let award_title
    let ud_logo
    let skills
    let skills_title
    let trophy
    let skill_icon

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        education = document.getElementById("education")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        awards = document.getElementById("awards_showcase")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        skills_container = document.getElementById("skills_container")
        setTimeout(() => education.style.right = "-5%", 478)
        setTimeout(() => awards.style.right = "-5%", 300)
        setTimeout(() => skills_container.style.right = "-5%", 100)
        setTimeout(() => education.style.right = "-27%", 1800)
        setTimeout(() => awards.style.right = "-27%", 2000)
        setTimeout(() => skills_container.style.right = "-27%", 2178)
    }, [])

    function handleTabsMouthClicked(event) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.transitionDelay = "0ms"
            if (tabs[i] !== event.currentTarget) {
                tabs[i].style.right = "-50vw"
            }
        }

        event.currentTarget.style.width = "100vw"
        event.currentTarget.style.height = "100vh"
        event.currentTarget.style.right = "0"
        event.currentTarget.style.top = "0"
        event.currentTarget.style.borderRadius = "0"
        portrait.style.transitionDelay = "0ms"
        portrait.style.left = "-100vw"
        return_btn.style.left = "1vw"
        fullPage = true
        currentTab = event.currentTarget;
        if(event.currentTarget.id === "education"){
            edu_title.style.marginBottom = "30%"
            edu_title.style.fontSize = "4.5vw"
            edu_title.style.transitionDelay = "0ms"
            edu_info.style.opacity = "100"
            edu_info.style.top = "40%"
            edu_info.style.transition= "all .8s cubic-bezier(.6,.4,0,1)"
            ud_logo.style.top = "10vh"
            ud_logo.style.right = "-15%"
            ud_logo.style.width = "40vw"
            ud_logo.style.height = "40vw"
            ud_logo.style.transitionDelay = "0ms"
            return_btn.style.filter = "invert(22%) sepia(35%) saturate(582%) hue-rotate(27deg) brightness(100%) contrast(85%)"
        }
        else if(event.currentTarget.id === "awards_showcase"){
            award_title.style.marginBottom = "30%"
            award_title.style.fontSize = "4vw"
            award_title.style.transitionDelay = "0ms"
            award_info.style.opacity = "100"
            award_info.style.top = "40%"
            award_info.style.transition= "all .8s cubic-bezier(.6,.4,0,1)"
            trophy.style.top = "20vh"
            trophy.style.right = "-15%"
            trophy.style.width = "35vw"
            trophy.style.height = "35vw"
            trophy.style.transitionDelay = "0ms"
            return_btn.style.filter = "invert(91%) sepia(9%) saturate(1104%) hue-rotate(36deg) brightness(98%) contrast(90%)"
        }
        else if(event.currentTarget.id === "skills_container"){
            skills_title.style.marginBottom = "30%"
            skills_title.style.fontSize = "4vw"
            skills_title.style.transitionDelay = "0ms"
            skills.style.opacity = "100"
            skills.style.top = "45%"
            skills.style.transition= "all .8s cubic-bezier(.6,.4,0,1)"
            skill_icon.style.top = "10vh"
            skill_icon.style.right = "-8%"
            skill_icon.style.width = "35vw"
            skill_icon.style.height = "35vw"
            skill_icon.style.transitionDelay = "0ms"
            return_btn.style.filter = "invert(100%) sepia(4%) saturate(0%) hue-rotate(290deg) brightness(107%) contrast(104%)"
        }
        education.style.cursor = "auto"
        awards.style.cursor = "auto"
        skills_container.style.cursor = "auto"
    }

    function handlePortraitClicked(event) {
        portrait = document.getElementById("portrait")
        if(event.target.className === "contact_icon") return
        if(flip){
            portrait.style.transform = "RotateY(0deg)"
            flip = false
        }
        else{
            portrait.style.transform = "RotateY(180deg)"
            flip = true
        }
    }

    function handleLinkedInClicked() {
        window.open("https://www.linkedin.com/in/dave-lee-31a31a24a/")
    }

    function handleGitHubClicked() {
        window.open("https://github.com/cupofocha")
    }

    function handleEmailClicked() {
        window.open("mailto:ochatastesgood@gmail.com")
    }

    function handleReturnBtnClicked() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.right = "-27%"
            tabs[i].style.width = "30%"
            tabs[i].style.height = "30%"
            tabs[i].style.borderRadius = "50px 0 0 50px"
            tabs[i].style.transitionDelay = "200ms"
        }
        tabs[0].style.top = "3%"
        tabs[1].style.top = "32%"
        tabs[2].style.top = "60%"
        portrait.style.transitionDelay = "200ms"
        portrait.style.left = "35%"
        return_btn.style.left = "-100vw"
        if(currentTab.id === "education"){
            edu_title.style.marginBottom = "3vh"
            edu_title.style.fontSize = "2vw"
            edu_title.style.transitionDelay = "200ms"
            edu_info.style.opacity = "0"
            edu_info.style.top = "80vh"
            edu_info.style.transition= "all .3s cubic-bezier(.6,.4,0,1)"
            ud_logo.style.top = "1vh"
            ud_logo.style.width = "13vw"
            ud_logo.style.height = "13vw"
            ud_logo.style.transitionDelay = "200ms"
        }
        else if(currentTab.id === "awards_showcase"){
            award_title.style.marginBottom = "3vh"
            award_title.style.fontSize = "2vw"
            award_title.style.transitionDelay = "200ms"
            award_info.style.opacity = "0"
            award_info.style.top = "80vh"
            award_info.style.transition= "all .3s cubic-bezier(.6,.4,0,1)"
            trophy.style.top = "4vh"
            trophy.style.width = "13vw"
            trophy.style.height = "13vw"
            trophy.style.transitionDelay = "200ms"
        }
        else if(currentTab.id === "skills_container"){
            skills_title.style.marginBottom = "3vh"
            skills_title.style.fontSize = "2vw"
            skills_title.style.transitionDelay = "200ms"
            skills.style.opacity = "0"
            skills.style.top = "80vh"
            skills.style.transition= "all .3s cubic-bezier(.6,.4,0,1)"
            skill_icon.style.top = "1vh"
            skill_icon.style.width = "13vw"
            skill_icon.style.height = "13vw"
            skill_icon.style.transitionDelay = "200ms"
        }
        fullPage = false
        currentTab = null;
    }

    function handleMouseEnter(event) {
        portrait = document.getElementById("portrait")
        return_btn = document.getElementById("return_btn")
        education = document.getElementById("education")
        awards = document.getElementById("awards_showcase")
        skills_container = document.getElementById("skills_container")
        edu_info = document.getElementById("edu_info")
        edu_title = document.getElementById("edu_title")
        award_info = document.getElementById("award_info")
        award_title = document.getElementById("award_title")
        ud_logo = document.getElementById("ud_logo")
        skills = document.getElementById("skills")
        skills_title = document.getElementById("skills_title")
        trophy = document.getElementById("trophy")
        skill_icon = document.getElementById("skill_icon")
        tabs = [education, awards, skills_container]
        if (event.currentTarget.id !== "return_btn" && !fullPage) {
            event.currentTarget.style.right = "0"
            event.currentTarget.style.transitionDelay = "0ms"
            event.currentTarget.style.cursor = "pointer"
        }
        else if(event.target.id === "return_btn"){
            currentTab.style.right = "-10%"
        }
    }

    function handleMouseLeave(event) {
        if (event.currentTarget.id !== "return_btn" && !fullPage) {
            event.currentTarget.style.right = "-27%"
        }
        else if(event.target.id === "return_btn"){
            currentTab.style.right = "0"
        }
    }

    return (
        <div id="cv">
            <img id="return_btn" src = {return_btn_img}
                 onClick={handleReturnBtnClicked}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
            />
            <div id="portrait"
                 onClick={handlePortraitClicked}
            >
                <div id="card_front">
                    <img id="portrait_img" src={portrait_img} alt="portrait" />
                    <div id="profile">
                        <h1 id="name">Xiangjiu Li</h1>
                    </div>
                    <div id="contact">
                        <img id="email_icon" src={email_img}
                             alt="email_icon"
                             className="contact_icon"
                             onClick={handleEmailClicked}
                        />
                        <img id="linkedin_icon"
                             src={linkedin_img}
                             alt="linkedin_icon"
                             className="contact_icon"
                             onClick={handleLinkedInClicked}
                        />
                        <img id="github_icon"
                             src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                             alt="github_icon"
                             className="contact_icon"
                             onClick={handleGitHubClicked}
                        />
                    </div>
                    <h3 id="hint_1" className="hint">Flip me :D</h3>
                </div>
                <div id="card_back">
                    <p style={{textAlign:"center"}}>
                        Hi there!
                    </p>
                    <p>
                        👨‍🎓I'm a Computer Science student at the University of Debrecen.
                    </p>
                    <p>
                        ⌨️I'm seeking for an internship to gain valuable experience in the field.
                    </p>
                    <p>
                        🌱I'm learning React and Spring Boot.
                    </p>
                    <p>
                        🔭I'm also working on a game using Godot Engine.
                    </p>
                    <p style={{fontSize:"0.5vw", opacity:"50%"}}>
                        And I'm experienced in Minecraft server hosting and mod development.
                    </p>
                    <h3 id="hint_2" className="hint">Flip me :D</h3>
                </div>
            </div>
            <div id="info">
                <div id="education"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <div id="ud_logo" className="side_img_container">
                        <img id="ud_logo_img" src={ud_logo_img} alt="ud_logo" className="side_img"/>
                    </div>
                    <h1 id="edu_title">Education</h1>
                    <div id="edu_info">
                        <h4 id="degree">Ongoing Computer Science BSc</h4>
                        <div id="uni">
                            <h3 id="uni_name">University of Debrecen</h3>
                        </div>
                        <h2 id="gpa">CGPA: 4.07/5</h2>
                    </div>
                </div>
                <div id="awards_showcase"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <div id="trophy" className="side_img_container">
                        <img id="trophy_img" src={trophy_img} alt="trophy_img" className="side_img"/>
                    </div>
                    <h1 id="award_title">Awards</h1>
                    <div id="award_info">
                        <div id="award1" className="awards">
                            <h2 id="award1_name" className="award_name">Stipendium Hungaricum Scholarship</h2>
                            <p id="award1_org" className="award_org">Tempus Public Foundation [15 Jul 2020]</p>
                        </div>
                        <div id="award2" className="awards">
                            <h2 id="award2_name" className="award_name">Chinese Government Scholarship</h2>
                            <p id="award2_org" className="award_org">China Scholarship Council [3 Aug 2020]</p>
                        </div>
                    </div>
                </div>
                <div id="skills_container"
                     onClick={handleTabsMouthClicked}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <div id="skill_icon" className="side_img_container">
                        <img id="skill_icon_img" src={java_file_icon} alt="trophy_img" className="side_img"/>
                    </div>
                    <h1 id="skills_title">Tech / Tools</h1>
                    <div id="skills">
                        <div id="skills_set_1" className="skills_set">
                            <div id="java" className="skill_container">
                                <h3>Java</h3>
                            </div>
                            <div id="web" className="skill_container">
                                <h3>JavaScript / HTML / CSS</h3>
                            </div>
                            <div id="c_sharp" className="skill_container">
                                <h3>C#</h3>
                            </div>
                            <div id="python" className="skill_container">
                                <h4>Python</h4>
                            </div>
                            <div id="c++" className="skill_container">
                                <h4>C++</h4>
                            </div>
                            <div id="c" className="skill_container">
                                <h4>C</h4>
                            </div>
                            <div id="english" className="skill_container">
                                <p>English</p>
                            </div>
                            <div id="chinese" className="skill_container">
                                <p>Chinese</p>
                            </div>
                            <div id="hungarian" className="skill_container">
                                <p>Egy kicsit Magyarul</p>
                            </div>
                        </div>
                        <div id="skills_set_2" className="skills_set">
                            <div id="spring_boot" className="skill_container">
                                <h3>Spring Boot</h3>
                            </div>
                            <div id="react" className="skill_container">
                                <h3>React</h3>
                            </div>
                            <div id="postgresql" className="skill_container">
                                <h3>PostgreSQL</h3>
                            </div>
                            <div id="git" className="skill_container">
                                <h4>Git</h4>
                            </div>
                            <div id="linux" className="skill_container">
                                <h4>Linux</h4>
                            </div>
                            <div id="game_engines" className="skill_container">
                                <h4>Unity / Godot</h4>
                            </div>
                            <div id="javafx" className="skill_container">
                                <p>JavaFX</p>
                            </div>
                            <div id="android" className="skill_container">
                                <p>Android Studio</p>
                            </div>
                            <div id="minecraft_forge" className="skill_container">
                                <p>Minecraft Forge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}
