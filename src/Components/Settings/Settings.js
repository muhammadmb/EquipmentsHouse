import React, { useEffect, useState } from 'react';
import './SettingsStyle.css';
import HouseIcon from '@material-ui/icons/House';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '@material-ui/core/Switch';

const Settings = (props) => {

    const [openSittngs, setOpenSettings] = useState(true);
    const [backgroundStatus, setBackgroundStatus] = useState(true);

    const color = localStorage.getItem("color");

    const handleColorChange = (color) => {
        localStorage.setItem("color", color)
        props.OnColorChange(color);
    }

    const handleBackgroundController = () => {
        setBackgroundStatus(!backgroundStatus);
        props.backgroundOptionsChange(backgroundStatus);
    }

    return (
        <div className={openSittngs ? "settings-box" : "settings-box open"}>
            <div
                className="toggle-settings"
                onClick={() => setOpenSettings(!openSittngs)}
            >
                <SettingsIcon
                    className={openSittngs ? "icon" : "settings-icon"}
                />
            </div>

            <div className="settings-content">

                <HouseIcon className="house-icon" style={{ color }} />
                <h4 className="settingsBrand" style={{ color }}>Equipments House</h4>

                <div className="options-box">
                    <h4>Colors</h4>
                    <ul className="colors-list">
                        <li className={color === "#FFD700" ? "active" : ""} onClick={() => handleColorChange("#FFD700")}></li>
                        <li className={color === "#f06292" ? "active" : ""} onClick={() => handleColorChange("#f06292")}></li>
                        <li className={color === "#004d40" ? "active" : ""} onClick={() => handleColorChange("#004d40")}></li>
                        <li className={color === "#3e2723" ? "active" : ""} onClick={() => handleColorChange("#3e2723")}></li>
                        <li className={color === "#263238" ? "active" : ""} onClick={() => handleColorChange("#263238")}></li>
                    </ul>
                </div>

                <div className="options-box">
                    <span className="span">Random background</span>
                    <Switch
                        style={{ color: localStorage.getItem("color") }}
                        color="default"
                        className="switch"
                        checked={backgroundStatus}
                        onChange={() => handleBackgroundController()}
                        name="check randome background"
                    />
                    <div className="Clear"></div>
                </div>

            </div>
        </div>
    );

}

export default Settings;