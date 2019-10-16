import React from 'react';
import mainimg from '../../images/mainimage.jpg';
class Home extends React.Component {

    render() {
        return (
            <div>
                {/* <p>This is Home component</p> */}
                <img src={mainimg} style={{ width: "100%" }} alt="Home" />
                <br /><br />
                <h1>EXPERIENCE A GREAT CAR HIRE IN BALI</h1>
                <hr style={{ backgroundColor: "#8e8e8e", height: "2px", align: "center", width: "250px" }} />
                <p style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
                    <span>
                        We at Bali Car Hire provides a range of quality rental cars available from compact city cars, medium family cars, mini-jeeps to 12/20 seats mini-buses. All vehicles are in good condition, well maintained and safe. Exploring Bali with the convenience of stopping when you want to explore the villages, mountains and stunning beaches is a great way to discover the beauty of Bali.</span></p><br />
                <p style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
                    <span>
                        Our private drivers can be considered as a friend to assist you in translation and some contributes with some notable facts about some of points of interest and the tourist destinations.
                    </span>
                </p>

            </div>
        )


    }
}

export default Home;