import { useRouteError } from "react-router-dom";
import './Error.css'

export default function Error404() {
    // const error: any = useRouteError();
    // console.error(error);

    return (
        <div id="error-page" className="Error404">
            <h1>Oops!</h1>
            <h2>404 Page Not Found</h2>
            <p>Sorry, the page that you are looking for in not available.</p>
        </div>
    );
}