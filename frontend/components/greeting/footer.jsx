import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import soundfile from '../../../app/assets/song/GoT.mp3';
// import Sound from 'react-sound';



class Footer extends React.Component {
   constructor(props){
       super(props)
        this.state = {play: false}
   }

    componentDidMount() {
        this.setState({play: true})
    }

    render() {
        return (
            <div className="footer" >
                <div className="footer-image">
                    <img src="http://pluspng.com/img-png/game-of-thrones-png--2000.png" />
                </div>

                {/* {  this.state.play ? (
                    <div>
                        <audio src="GoT.mp3" autoPlay controls />
                    </div> 
                    ) : (
                        null
                    )

                } */}

                {/* <div>
                    <iframe src="GoT.mp3" allow="autoplay" id="audio" ></iframe>
                    
                
                </div> 
               */}
                
             
            </div>
        )

    }
  


}


export default Footer;