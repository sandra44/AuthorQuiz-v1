import * as React from 'react';

class Continue extends React.Component<any,any>{

    render(){
        return(
            <button className="btn btn-primary" onClick={this.props.click}>Continue</button>
        )
    }
}

export default Continue;
