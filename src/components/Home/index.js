import React from 'react';
import mainimg from '../../images/mainimage.jpg';
class Home extends React.Component {

    render() {
        return (
            <div>
                {/* <p>This is Home component</p> */}
                <img src={mainimg} style={{ width: "84.3rem" }} alt="Home" />
            </div>
        )


    }
}

export default Home;