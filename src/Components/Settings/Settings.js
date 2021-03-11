import React, { useState } from 'react';
import './SettingsStyle.css';
import HouseIcon from '@material-ui/icons/House';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '@material-ui/core/Switch';

const Settings = (props) => {

    const [openSittngs, setOpenSettings] = useState(true);
    const [backgroundStatus, setBackgroundStatus] = useState(true);
    const color = localStorage.getItem("color");

    const handleColorChange = (color) => {
        localStorage.setItem("color", color);
        props.OnColorChange(color);
    }

    const handleBackgroundController = () => {
        setBackgroundStatus(!backgroundStatus);
        props.backgroundOptionsChange(backgroundStatus);
    }

    const ColorOptions = ["#FF7F00", "#00AEAE", "#B02578", "#3E5578", "#66B131", "#3C8EB6"];

    const ColorList = (usedColor) => (
        ColorOptions.map(item =>
            <li
                key={item}
                className={item === usedColor ? "active" : ""}
                onClick={() => handleColorChange(item)}
                style={{ backgroundColor: item }}
            >
            </li>)
    )

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
                    <h4>Theme</h4>
                    <ul className="colors-list">

                        {ColorList(color)}

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