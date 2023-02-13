import "./css/show_case.css"
import logo from "../logo.svg";

export default function ShowCase() {
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
                <div id="project_2" className="project">
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
                <div id="project_5" className="project">
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
        </div>

    )
}
