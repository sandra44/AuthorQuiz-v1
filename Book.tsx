import * as React from 'react';

class Book extends React.Component<any, any>{
   constructor(props:any){
        super(props);
   }

    render(){
        return(
            <div className="answer" onClick={this.props.click.bind(this, this.props.title)}>
            <h4>{this.props.title}</h4>
            </div> 
        );
    }
}

export default Book;
