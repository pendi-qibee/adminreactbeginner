import "./home.css"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummyData";



export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart 
            data={userData} 
            title="User Growth"
            grid
            dataKey="Active User" />
        </div>
    )
}