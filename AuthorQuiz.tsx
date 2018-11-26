import * as React from 'react';
import { Link} from 'react-router-dom';
import './assets/bootstrap.min.css';
import './AuthorQuiz.css';
import Hero from './Hero';
import Turn from './Turn';

class AuthorQuiz extends React.Component<any, any>{
        constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <Hero />
                <Turn turnData={this.props.turnData} nextQue={this.props.nextQue}/>
                <button type="button" className="btn btn-primary"><Link className="addAuthor" to="/add">Add an author</Link></button>
            </div>
        );
    }
}

export default AuthorQuiz;
