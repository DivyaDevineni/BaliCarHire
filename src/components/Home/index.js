import React from 'react';
import mainimg from '../../images/mainimage.jpg';
class Home extends React.Component{

    render(){
        return(
            <div>
{/* <p>This is Home component</p> */}
<img src={mainimg} alt="Home" style={{width:'84.3rem'}}/>
</div>
        )
            
        
    }
}

export default Home;