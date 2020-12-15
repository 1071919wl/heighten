import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        
        return(
            <div>
                <div className='jumpLady_sec'>

                    <div className='capisco_fp'>
                        <Link to={'/products/14'} className='fp_pics'>
                        <p className='randomSent'>Our company founder</p>  
                            <img src={window.capiscoURL} />
                            Capisco
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='hero_fp'>
                        <img src={window.heroURL} />
                    </div>
                    <div className='luna_fp'>
                        <Link to="/products/15" className='fp_pics'>
                        <p className='randomSent'>Easy Leaning for Active Work</p>  
                            <img src={window.lunaURL} />
                            Luna
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='jarvis_fp'>
                        <Link to="/products/5" className='fp_pics'>
                        <p className='randomSent2'>Best standing desk on the planet</p>  
                            <img src={window.jarvis1URL} />
                            Jarvis
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='tictoc_fp'>
                        <Link to="/products/16" className='fp_pics'>
                            <p className='randomSent'>Evolution of the everyday chair</p>  
                            <img src={window.tictocURL} />
                            Tic Toc
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='regen_fp'>
                        <Link to="/products/13" className='fp_pics'>
                            <p className='randomSent2'>The modern office chair, perfected</p>  
                            <img src={window.regenURL} />
                            ReGeneration
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>

                </div>
                
                <div className='midSent'>
                    <p className='midSent'>Everything you need to find your work flow</p>
                </div> 
                
                <div className='home_sec1'>
                    <div>
                        <img src={window.home1URL} className='home1_img'/>
                    </div>
                    <div>
                        <img src={window.home2URL} className='home2_img'/>
                    </div> 
                    <div className='home_sec_sent'>
                        <p>Working from home? Feel healthy and engaged with our collection of award-winning standing desks, including the new Jarvis.</p>
                        <Link to='/categories/1' className='shopDesks'>Shop desks</Link>
                    </div> 
                </div> 

            </div>
        )
    }
}

export default Home;