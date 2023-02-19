import "./css/show_case.css";
import logo from "../logo.svg";
import ScrollIntoView from 'react-scroll-into-view';
import {useEffect, useRef, useState} from "react";
import skyrim_vid from "../skyrim_vid.webm";
import javafx_vid from "../javafx_vid.webm";
import godot_vid from "../godot_vid.webm";
import lib_demo from "../lib_demo.webm";
import sw_testing from "../sw-testing.webm";
import main_page_screen_shot from "../main_page_screen_shot.png";
import post_page_screen_shot from "../post_page_screen_shot.png";

export default function ShowCase() {
    const [counter, setCounter] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [stopCounting, setStopCounting] = useState(false)

    const project_2 = useRef(null)
    const project_5 = useRef(null)
    const show_case = useRef(null)
    const buttonHref = useRef(null)

    useEffect(() => {
        if(stopCounting){
            setCounter(15)
        }
        if (counter > 0 && !stopCounting){
            setTimeout(() => setCounter(counter - 1), 1000)
        }
        else if(counter === 0 && !stopCounting){
            if (currentPage === 1) {
                //project_5.current.scrollIntoView({behavior: "smooth", inline: "center", block:"nearest"})
                show_case.current.scrollTo({left: 100000, behavior: "smooth"})
                buttonHref.current.style.left = "105px"
                setCurrentPage(2)
                setCounter(8)
            }
            else {
                //project_2.current.scrollIntoView({behavior: "smooth", inline: "center", block:"nearest"})
                show_case.current.scrollTo({left: 0, behavior: "smooth"})
                buttonHref.current.style.left = "5px"
                setCurrentPage(1)
                setCounter(8)
            }
        }
    }, [counter, stopCounting]);

    function handleMouseEnter(event) {
        setStopCounting(true)
    }

    function handleMouseLeave(event) {
        setStopCounting(false)
    }

    function handleHrefClicked(){
        if (currentPage === 1) {
            //project_5.current.scrollIntoView({behavior: "smooth", inline: "center", block:"nearest"})
            show_case.current.scrollTo({left: 100000, behavior: "smooth"})
            buttonHref.current.style.left = "105px"
            setCurrentPage(2)
            setStopCounting(true)
        }
        else {
            //project_2.current.scrollIntoView({behavior: "smooth", inline: "center", block:"nearest"})
            show_case.current.scrollTo({left: 0, behavior: "smooth"})
            buttonHref.current.style.left = "5px"
            setCurrentPage(1)
            setStopCounting(true)
        }
    }

    return (
        <div id="show_cases_container">
            <h1
                style={{
                    fontSize: "4vw",
                    marginBottom: "3vh",
                    marginTop: "1vh",
                    fontFamily: 'PopulaireW00-Regular, cursive',
                    textTransform: "uppercase",
                    letterSpacing: "10px",
            }}
            >Portfolio</h1>
            <div id="show_case" ref={show_case}>
                <div id="project_1"
                     className="project"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onClick={() => window.open("https://github.com/cupofocha/android-demo")}
                >
                    <video id="project_1_screen_shot"
                       src={lib_demo}
                       autoPlay={true}
                       muted={true}
                       loop={true}
                       className="project_screen_shot"
                    />
                    <div id="project_1_info" className="project_info">
                        <h1 id="project_1_title" className="project_title">Library App Demo</h1>
                        <h3 id="project_1_description" className="project_description">A simple Android library app for my android development class. Supporting account registration, verification and books renting.</h3>
                        <h2 id="project_1_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_1_tool" className="project_tool">Java, Android SDK</h4>
                    </div>
                </div>
                <div id="project_2"
                     className="project"
                     ref={project_2}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onClick={() => window.open("http://bird.ochawork.shop")}
                >
                    <div id="ribbon">
                        <h1 id="ribbon_text">Favorite</h1>
                    </div>
                    <img id="project_2_screen_shot"
                         src={post_page_screen_shot}
                         className="project_screen_shot"
                    />
                    <div id="project_2_info" className="project_info">
                        <h1 id="project_2_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_2_description_1" className="project_description">A social media website where you can create your profile, posting pictures also commenting under others' posts!</h3>
                        <h2 id="project_2_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_2_tool" className="project_tool">love, passion, Java(Spring Boot), Javascript(React), PostgreSQL</h4>
                    </div>
                </div>
                <div id="project_3"
                     className="project"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onClick={() => window.open("https://github.com/cupofocha/SkyrimFlavoredLockPicking")}
                >
                    <video id="project_3_video"
                         src={skyrim_vid}
                         autoPlay={true}
                         muted={true}
                         loop={true}
                         className="project_screen_shot"
                    />
                    <div id="project_3_info" className="project_info">
                        <h1 id="project_3_title" className="project_title">(RF)Skyrim-Like lock picking</h1>
                        <h3 id="project_3_description" className="project_description">A project for my reinforcement learning class.</h3>
                        <h3 id="project_3_description" className="project_description">Pick locks like you're supposed to!</h3>
                        <h2 id="project_3_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_3_tool" className="project_tool">Burned-out gpu, C#(Unity), Unity ML-Agents</h4>
                    </div>
                </div>
                <div id="project_4"
                     className="project"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                        onClick={() => window.open("http://bird.ochawork.shop")}
                >
                    <video id="project_4_screen_shot"
                         src={godot_vid}
                         autoPlay={true}
                         muted={true}
                         loop={true}
                         className="project_screen_shot"
                    />
                    <div id="project_4_info" className="project_info">
                        <h1 id="project_4_title" className="project_title">Drifting in Space(WIP)</h1>
                        <h3 id="project_4_description" className="project_description">Still in early development!</h3>
                        <h2 id="project_4_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_4_tool" className="project_tool">GDScript(Godot Engine)</h4>
                    </div>
                </div>
                <div id="project_5"
                     className="project"
                     ref={project_5}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                        onClick={() => window.open("http://bird.ochawork.shop")}
                >
                    <video id="project_5_screen_shot"
                         src={javafx_vid}
                         autoPlay={true}
                         muted={true}
                         loop={true}
                         className="project_screen_shot"
                    />
                    <div id="project_5_info" className="project_info">
                        <h1 id="project_5_title" className="project_title">Coin Flipping</h1>
                        <h3 id="project_5_description" className="project_description">A JavaFX project for class, my very first project comes with actual UI</h3>
                        <h2 id="project_5_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_5_tool" className="project_tool">Java(JavaFX)</h4>
                    </div>
                </div>
                <div id="project_6"
                     className="project"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                        onClick={() => window.open("https://github.com/cupofocha/software-testing-assignment")}
                >
                    <video id="project_6_screen_shot"
                         src={sw_testing}
                         autoPlay={true}
                         muted={true}
                         loop={true}
                         className="project_screen_shot"
                    />
                    <div id="project_6_info" className="project_info">
                        <h1 id="project_6_title" className="project_title">web testing</h1>
                        <h3 id="project_6_description" className="project_description">It's a project for my software testing class. Aimed to test the login, logout, item purchasing functions of the website SWAGLABS</h3>
                        <h2 id="project_6_tool_title" className="project_tool_title">Made With</h2>
                        <h4 id="project_6_tool" className="project_tool">Gherkin(Cucumber), Java, Selenium</h4>
                    </div>
                </div>
            </div>
            <div id="page_href" onClick={handleHrefClicked}>
                <span id="href_button" ref={buttonHref}/>
            </div>
        </div>

    )
}
