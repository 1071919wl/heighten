import React from 'react';

class Error404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='userAuth'>
                <div className='errorPage'>
                    <div className='errContent'>
                        <div className='errSent'>
                            <h1 className='errTitle'>Sorry about that!</h1>
                                <p>The page you requested doesn’t exist, so let’s get you moving in the right direction.</p> 
                                <p>Use the search bar to find what you’re looking for, or explore popular choices below.</p>   
                            </div>
                        <div>
                            <img src={window.error404URL} />
                        </div>   
                    </div>
                </div>
            </div>
        )
    }

}

export default Error404;