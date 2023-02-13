import {useRef} from "react";
import logo from "../logo.svg";

export default function ProjectVideo(props) {
    const videoRef = useRef(null);
    function handleMouthEnter() {
        let video = videoRef.current;
        video.pause();
    }
    function handleMouthLeave() {
        let video = videoRef.current;
        video.play();
    }

    return (
        <div id="project_video_container">
            <video id="project_video" ref={videoRef} src=""
                   onMouseEnter={handleMouthEnter}
                   onMouseLeave={handleMouthLeave}
                   autoPlay={true}></video>
            <div id="project_info">
                <div id="project_title_container">
                    <img id="github_icon" className="contact_icon" src={logo}/>
                    <h1 id="project_title">{props.title}</h1>
                </div>
                <h2 id="project_description">{props.description}</h2>
            </div>
        </div>
    )
}