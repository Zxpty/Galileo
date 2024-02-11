
import { Link } from "react-router-dom";
import './Primary.css'
export function PrimaryButton() {
    return (
        <div className="button-section">
        <button className="primary-button">
            <Link to="/">Ver más</Link>
        </button>
        </div>
    )

}