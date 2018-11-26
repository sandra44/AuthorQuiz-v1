import * as React from 'react';
import {sample,shuffle} from 'underscore';
import Book from './Book';
import Continue from './Continue';

class Turn extends React.Component<any, any> {
    
    static getTurnData = (Authors:any[]) => {
    
        const allBooks = Authors.reduce((p:any,c:any) => {
            return p.concat(c.books);
        },[]);
        console.log(Authors);
        const fourRandomBooks = shuffle(allBooks).slice(0,4);
        const answer = sample(fourRandomBooks);

      
        return{
            books: fourRandomBooks,
            author: Authors.filter((author:any) =>
                    author.books.some((title:string) =>
                        title === answer))[0]
        }
    }

    constructor(props:any){
        super(props);
        this.state = {
            highlight: ' ',
            score: parseInt(sessionStorage.getItem("score") || '0', 10)
        }
    }

    onAnswerSelected = (answer:any) => {
        const isCorrect = this.props.turnData.author.books.some((book:any) => book === answer);
        const hghlgt = isCorrect ? 'correct' : 'wrong';
        
        if( hghlgt === 'correct' ){
           sessionStorage.setItem("score", (parseInt(sessionStorage.getItem("score") || '0', 10) + 1).toString())
           const myElement = document.getElementById('answer-div')!;
           myElement.style.pointerEvents = 'none';
        }
        this.setState(
            this.state={
                highlight: hghlgt,
                score: parseInt(sessionStorage.getItem("score") || '0', 10)
            }
        );
    }

    highlightToBgColor = (highlight:string) => {
        const mapping = {
            'none':'',
            'correct':'#58ce9b',
            'wrong'  :'#e05c5c'
        };
        return mapping[highlight];
    }
 
    render(){
        return(
          <div>
            <button type="button score" className="btn btn-primary">
              Score
              <span className="badge score-badge">
                {this.state.score}
              </span>
            </button>
            <div className="row turn options" style={{backgroundColor: this.highlightToBgColor(this.state.highlight)}}>
                    <div className="col-4 offset-1">
                        <img src={require(`${this.props.turnData.author.imageUrl.toString()}`)} className="authorimage" alt="Author" />
                    </div>
                    <div className="col-6" id="answer-div">
                        {this.props.turnData.books.map((title:string) => <Book title={title} key={title} click={this.onAnswerSelected}/>)}
                    </div>
            </div>   
            <div className="cntBtn">
                {this.state.highlight==='correct' && <Continue click={this.props.nextQue}/>}
            </div>
        </div>     
        );
    }
}

export default Turn;
