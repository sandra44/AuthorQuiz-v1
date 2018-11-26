import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router} from 'react-router-dom';
import AddAuthorForm from './AddAuthorForm';
import AuthorQuiz from './AuthorQuiz';
import history from './history';
import './index.css';
import Turn from './Turn';


const authors = [
    {
        name: 'Mark Twain',
        imageUrl: './assets/images/MarkTwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing It'] 
    },
    {
        name: 'J.K. Rowling',
        imageUrl: './assets/images/JKRowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone', 'Harry Potter and Prisoner of Askaban'] 
    },
    { 
        name: 'Stephen king',
        imageUrl: './assets/images/StephenKing.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'It'] 
    },
    {
        name: 'William Shakespeare',
        imageUrl: './assets/images/WilliamShakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet'] 
    }
]

let turnData = {};
const new_authors_count = parseInt(sessionStorage.getItem("total_new_authors") || '1', 10);

const nextQue = () => {
    sessionStorage.setItem("reloading","true");
    window.location.reload();
}

const app = () => {
    const reloading = sessionStorage.getItem("reloading");
    if(reloading){
        sessionStorage.removeItem("reloading");
        for(let j=1; j<new_authors_count; j++){
            authors.push(JSON.parse(sessionStorage.getItem("new_author_"+j.toString()) || '{}'));
        }
    }
    turnData = Turn.getTurnData(authors);
    console.log(turnData);
    return <AuthorQuiz authors={authors} nextQue={nextQue} turnData={turnData}/>
} 

const pushAuthor = (author:any) => {
    authors.push(author); 
    sessionStorage.setItem("new_author_"+new_authors_count.toString(), JSON.stringify(author));
    sessionStorage.setItem("total_new_authors", (new_authors_count+1).toString());
    history.push("/");
}
  
const AuthorFormWrapper = () => {
    return <AddAuthorForm pushAuthor={pushAuthor}/>
}

ReactDOM.render(
    <Router history={history}>
        <React.Fragment>
            <Route exact={true} path="/" component={app} />
            <Route path="/add" component={AuthorFormWrapper} />
        </React.Fragment>
    </Router>,document.getElementById('root') as HTMLElement);
