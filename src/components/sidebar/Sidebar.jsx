import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, PersonOutline, Inventory2, ReceiptLong, Assessment } from '@mui/icons-material';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>\
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>\
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem active">
                            <Inventory2 className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <ReceiptLong className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
