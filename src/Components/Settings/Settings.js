import React, {useState} from 'react';
import './SettingsStyle.css';
import HouseIcon from '@material-ui/icons/House';
import SettingsIcon from '@material-ui/icons/Settings';

const Settings = () =>{

    const[openSittngs, setOpenSettings] = useState(true);

    return(
        <div className= {openSittngs ? "settings-box" : "settings-box open"}>
            <div 
                className="toggle-settings" 
                onClick = {() => setOpenSettings(!openSittngs)}
            >
                <SettingsIcon 
                    className={openSittngs ? "icon" : "settings-icon"} 
                />
            </div>
            
            <div className="settings-container">
            <HouseIcon className="house-icon"/>
            </div>
        </div>
    );

}

export default Settings;