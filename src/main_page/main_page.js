import CV from './cv.js';
import './css/main_page.css';
import ShowCase from "./show_case";

export default function MainPage(){
    return (
        <div id="main_page">
            <CV/>
            <ShowCase/>
        </div>
    )
}