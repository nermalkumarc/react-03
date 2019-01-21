import React, { Component } from 'react';
import './NoteForm.css';
import fire from '../Config/config';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
        this.logout = this.logout.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.

    logout() {
        fire.auth().signOut();
    }

    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value, // the value of the text input

        })
    }

    writeNote() {
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteContent: '',
        })
    }

    render() {
        return (
            <div className="formWrapper">
                <input className="noteInput" placeholder="Start Chatting..." value={this.state.newNoteContent} onChange={this.handleUserInput} />
                <button className="noteButton" onClick={this.writeNote}>Send</button>
                <div>
                    <button className="noteButton" onClick={this.logout}>Logout</button>
                </div>
                
            </div>
        )
    }
}

export default NoteForm;