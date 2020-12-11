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
                        <Link to="/">
                            <img src={window.capiscoURL} />
                            <a href="#">
                                Capisco
                                <img className='arrow' src={window.arrowURL} />
                            </a>
                        </Link>
                    </div>
                    <div className='hero_fp'>
                        <img src={window.heroURL} />
                    </div>
                    <div className='luna_fp'>
                        <Link to="/">
                            <img src={window.lunaURL} />
                            <a href="#">
                                Luna
                                <img className='arrow' src={window.arrowURL} />
                            </a>
                        </Link>
                    </div>
                    <div className='jarvis_fp'>
                        <Link to="/">
                            <img src={window.jarvisURL} />
                            <a href="#">
                                Jarvis
                                <img className='arrow' src={window.arrowURL} />
                            </a>
                        </Link>
                    </div>
                    <div className='tictoc_fp'>
                        <Link to="/">
                            <img src={window.tictocURL} />
                            <a href="#">
                                Tic Toc
                                <img className='arrow' src={window.arrowURL} />
                            </a>
                        </Link>
                    </div>
                    <div className='regen_fp'>
                        <Link to="/">
                            <img src={window.regenURL} />
                            <a href="#">
                                ReGeneration
                                <img className='arrow' src={window.arrowURL} />
                            </a>
                        </Link>
                    </div>

                </div>


            </div>
        )
    }
}

export default Home;