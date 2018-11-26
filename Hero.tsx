import * as React from 'react';

class Hero extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }
    
    render(){
        return (
            <div className="row">
                <div className="jumbotron col-10 offset-1">
                    <h1>Author Quiz</h1>
                    <p>Select the book written by the author shown</p>
                </div>
            </div>
        );
    }
}

export default Hero;
