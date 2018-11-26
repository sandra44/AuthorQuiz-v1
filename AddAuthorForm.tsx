import {omit} from 'lodash';
import * as React from 'react';
import './AddAuthorForm.css';

class AddAuthorForm extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ' '
        }
    }

    onAddAuthor = (event:any) => {
        event.preventDefault();
        this.props.pushAuthor(omit(this.state, ['bookTemp'])); 
    }

    handleAddBook = (event:any) => {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ' '
        });
    }

    onFieldChange = (event:any) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (<div className="add-author-form">
                <h1>Add Author</h1>
                <form onSubmit={this.onAddAuthor}>
                    <div className="text-input form-group">
                        <label htmlFor="name">Name </label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onFieldChange}/>
                    </div>
                    <div className="text-input form-group">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                    </div>
                    <div className="text-input form-group">
                        <label htmlFor="bookTemp">Books</label>
                        {this.state.books.map((book:any) => <p key={book}>{book}</p>)}
                        <input type="text" className="form-control" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
                        <input type="button" className="btn btn-default" value="+" onClick={this.handleAddBook} />
                    </div>
                    <div>
                        <input type="submit" className="btn btn-success" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddAuthorForm;
