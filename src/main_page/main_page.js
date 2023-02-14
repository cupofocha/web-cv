import CV from './cv.js';
import './css/main_page.css';
import ShowCase from "./show_case";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

export default function MainPage(){

    return (
        <div id="main_page">
            <Fullpage>
                <FullPageSections>
                    <FullpageSection id="page_1">
                        <CV/>
                    </FullpageSection>
                    <FullpageSection>
                        <ShowCase/>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </div>
    )
}