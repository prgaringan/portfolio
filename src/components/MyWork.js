import React from "react";

import './MyWork.css';

import DriversLOG from '../assets/Driverslog.png';
import InfoFleet from '../assets/Infofleet-logo.png';
import Raktherm from '../assets/Raktherm-logo.png';
import Appstore from '../assets/Appstore.png';
import Playstore from '../assets/Playstore.png';
import DVRG_Srnshot from '../assets/Driverslog-ScreenShot.png';
import INFRM_Srnshot from '../assets/Infofleet-Screenshot.png';
import RAK_Scrnshot from '../assets/Raktherm-Screenshot.png'


const MyWork = () => {
    return (
        <div className="MyWork">

            <h1>MY WORK</h1>

            <div className="DriversLOG">
                <div className="content">

                    <div class="row">


                        <div class="column">

                            <img src={DriversLOG} alt="DriversLOG" className="center-img " />

                            <p>"DriversLOG is a mobile app for easy vehicle management. Seamlessly record, store, and access all essential vehicle documents with secure cloud storage, providing peace of mind from acquisition to disposal.”</p>

                            <a href="https://driverslog.ae/" target="_blank">www.driverslog.ae</a>

                            <div class="column-store">
                                <a  href="https://play.google.com/store/apps/details?id=com.driverslog&pli=1" target="_blank"><img src={Playstore} alt="Playstore" className="store" /></a>
                                <a href="https://apps.apple.com/us/app/driverslog-mobile/id6450977538" target="_blank"><img src={Appstore} alt="Appstore" className="store"/></a>
                            </div>
                        </div>


                        <div class="column">
                        
                        <img src={DVRG_Srnshot} alt="Driverslog-ScreenShot" className="Dvrg-Scrnshot" />
                           
                        </div>
                    </div>

                </div>

            </div>

            <div className="InfoFleet">
                <div className="content">

                    <div class="row">

                    <div class="column">
                        
                        <img src={INFRM_Srnshot} alt="Informap-ScreenShot" className="Dvrg-Scrnshot" />
                           
                        </div>
                        <div class="column">

                            <img src={InfoFleet} alt="Informap" className="center-img " />

                            <p>"InfoFleet is a GPS Tracking App that allows to monitor vehicles and assets through mobile device. Provides real-time location tracking and comprehensive insights and analytics, empowering businesses to optimize fleet management.”</p>


                            <div class="column-store">
                                <a  href="https://play.google.com/store/apps/details?id=com.noms.infofleet&hl=en_US" target="_blank"><img src={Playstore} alt="Playstore" className="store" /></a>
                                <a href="https://apps.apple.com/us/app/infofleet-mobile/id1097711730" target="_blank"><img src={Appstore} alt="Appstore" className="store"/></a>
                            </div>
                        </div>


                      
                    </div>

                </div>

            </div>

            <div className="Raktherm">
                <div className="content">

                    <div class="row">


                        <div class="column">

                            <img src={Raktherm} alt="Raktherm" className="center-img " />

                            <p>"RAKtherm Mobile App is for plumbing projects, offering real-time updates on products. Beyond a reference, it provides interactive guides, insightful tips, and practical advice for professionals. Intuitive calculators simplify complex measurements.”</p>

                            <div class="column-store">
                                <a  href="https://play.google.com/store/apps/details?id=com.raktherm.raktherm&hl=en&gl=US" target="_blank"><img src={Playstore} alt="Playstore" className="store" /></a>
                                <a href="https://apps.apple.com/ae/app/raktherm/id1608857770" target="_blank"><img src={Appstore} alt="Appstore" className="store"/></a>
                            </div>
                        </div>


                        <div class="column">
                        
                        <img src={RAK_Scrnshot} alt="Driverslog-ScreenShot" className="Dvrg-Scrnshot" />
                           
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )



}

export default MyWork