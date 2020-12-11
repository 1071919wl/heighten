import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
                <div className='jumpLady_sec'>
                    <div className='capisco_fp'>
                        <img src={window.capiscoURL} />
                    </div>
                    <div className='hero_fp'>
                        <img src={window.heroURL} />
                    </div>
                    <div className='luna_fp'>
                        <img src={window.lunaURL} />
                    </div>
                    <div className='jarvis_fp'>
                        <img src={window.jarvisURL} />
                    </div>
                    <div className='tictoc_fp'>
                        <img src={window.tictocURL} />
                    </div>
                    <div className='regen_fp'>
                        <img src={window.regenURL} />
                    </div>

                </div>


            </div>
        )
    }
}

export default Home;