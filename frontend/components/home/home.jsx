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
                        <Link to="/" className='fp_pics'>
                            <img src={window.capiscoURL} />
                            Capisco
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='hero_fp'>
                        <img src={window.heroURL} />
                    </div>
                    <div className='luna_fp'>
                        <Link to="/" className='fp_pics'>
                            <img src={window.lunaURL} />
                            Luna
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='jarvis_fp'>
                        <Link to="/" className='fp_pics'>
                            <img src={window.jarvisURL} />
                            Jarvis
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='tictoc_fp'>
                        <Link to="/" className='fp_pics'>
                            <img src={window.tictocURL} />
                            Tic Toc
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>
                    <div className='regen_fp'>
                        <Link to="/" className='fp_pics'>
                            <img src={window.regenURL} />
                            ReGeneration
                            <img className='arrow' src={window.arrowURL} />
                        </Link>
                    </div>

                </div>


            </div>
        )
    }
}

export default Home;