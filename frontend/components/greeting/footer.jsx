import React, { Component } from 'react';
import { Link } from 'react-router-dom';




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

                <div className="footer-column">
               
                    <div className="icons">
                        
                        <a href="https://kevincheang.com/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Me_bank_logo15.png" height="60" />
                        </a>



                        <a href="https://github.com/kchea002/Whelp-Winter-is-Coming">
                            <i class="devicon-github-plain-wordmark colored" ></i>
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-cheang">
                            <img src="https://image.flaticon.com/icons/svg/174/174857.svg" height="60" />
                        </a>
                      
                        
                    </div>


                    <div className="footer-image">
                        <img src="http://pluspng.com/img-png/game-of-thrones-png--2000.png" />
                    </div>

                </div>


              
              

                 <div>
                    <iframe src="GoT.mp3" allow="autoplay" id="audio" ></iframe>
                    
                
                </div> 
               
                
             
            </div>
        )

    }
  


}


export default Footer;