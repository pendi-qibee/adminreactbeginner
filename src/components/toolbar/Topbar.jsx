import React from 'react'
import "./topbar.css"
// import {NotificationsNone} from '@material-ui/icons';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">React Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">3</span>
                    </div>
                    <img src="https://images.pexels.com/photos/9811069/pexels-photo-9811069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}