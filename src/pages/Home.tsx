import Banner from "../widgets/banner/Banner";
import EratLacinia from "../widgets/eratLacinia/EratLacinia";
import Header from "../widgets/header/Header";
import IpSumSedDolor from "../widgets/ipsumSedDolor/IpsumSedDolor";
import SpringBoot from "../widgets/springBoot/SpringBoot";
import Sidebar from "./Sidebar";

function Home() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    
                    {/* contents */}
                    <Banner />
                    <EratLacinia />
                    <SpringBoot />
                    <IpSumSedDolor />
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home