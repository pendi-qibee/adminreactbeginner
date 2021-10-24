import React from 'react'
import "./topbar.css"
// import {NotificationsNone} from '@material-ui/icons';
import {NotificationsNone} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">React Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                       <NotificationsNone/>
                    </div>
                </div>
            </div>
        </div>
    )
}