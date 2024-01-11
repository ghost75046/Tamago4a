import React from "react";
import "./ToggleSwitch.css";




const ToggleSwitch = () => {
    return (<div>
            <input
                className="darkThemeSwitchCheckbox"
                id="react-switch-new"
                type="checkbox"
            />
            <label
                className="darkThemeSwitchLabel"
                htmlFor="react-switch-new"
            >
                <span className="darkThemeSwitchButton" />
            </label>
        </div>
    )
}

export default ToggleSwitch

