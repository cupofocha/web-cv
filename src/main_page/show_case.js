import "./css/show_case.css"
import logo from "../logo.svg";
import ScrollIntoView from 'react-scroll-into-view'
import {useEffect, useRef, useState} from "react";

export default function ShowCase() {
    const [counter, setCounter] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const project_2 = useRef(null)
    const project_5 = useRef(null)

    useEffect(() => {
        if (counter > 0)
            setTimeout(() => setCounter(counter - 1), 1000)
        else {
            console.log("Time out2!")
            if (currentPage === 1) {
                project_5.current.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
                setCurrentPage(2)
                setCounter(8)
            }
            else {
                project_2.current.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
                setCurrentPage(1)
                setCounter(8)
            }
        }
    }, [counter]);

    return (
        <div id="show_cases_container">
            <h1>Project Show Case</h1>
            <div id="show_case">
                <div id="project_1" className="project">
                    <img id="project_1_screen_shot"
                         src={logo}
                        className="project_screen_shot"
                    />
                    <div id="project_1_info" className="project_info">
                        <h1 id="project_1_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_1_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_1_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
                <div id="project_2" className="project" ref={project_2}>
                    <img id="project_2_screen_shot"
                         src={logo}
                         className="project_screen_shot"
                    />
                    <div id="project_2_info" className="project_info">
                        <h1 id="project_2_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_2_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_2_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
                <div id="project_3" className="project">
                    <img id="project_3_screen_shot"
                         src={logo}
                         className="project_screen_shot"
                    />
                    <div id="project_3_info" className="project_info">
                        <h1 id="project_3_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_3_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_3_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
                <div id="project_4" className="project">
                    <img id="project_4_screen_shot"
                         src={logo}
                         className="project_screen_shot"
                    />
                    <div id="project_4_info" className="project_info">
                        <h1 id="project_4_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_4_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_4_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
                <div id="project_5" className="project" ref={project_5}>
                    <img id="project_5_screen_shot"
                         src={logo}
                         className="project_screen_shot"
                    />
                    <div id="project_5_info" className="project_info">
                        <h1 id="project_5_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_5_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_5_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
                <div id="project_6" className="project">
                    <img id="project_6_screen_shot"
                         src={logo}
                         className="project_screen_shot"
                    />
                    <div id="project_6_info" className="project_info">
                        <h1 id="project_6_title" className="project_title">Surfin' Bird</h1>
                        <h3 id="project_6_description" className="project_description">A game about a bird surfing on a wave</h3>
                        <h4 id="project_6_tool">Tool: React, Spring Boot</h4>
                    </div>
                </div>
            </div>
            <div id="page_hrefs">
                <ScrollIntoView id="page_href_1" selector="#project_2" scrollOptions={{inline: "center", block: "nearest"}}
                                onClick={()=>{
                                    setCurrentPage(2)
                                }}>
                    <div id="page_1" className="page_href">
                        <img src={logo}/>
                    </div>
                </ScrollIntoView>
                <ScrollIntoView id="page_href_2" selector="#project_5" scrollOptions={{inline: "center", block: "nearest"}}
                                onClick={()=>{
                                    setCurrentPage(1)
                                }}>
                    <div id="page_2" className="page_href">
                        <img src={logo}/>
                    </div>
                </ScrollIntoView>
            </div>
        </div>

    )
}
