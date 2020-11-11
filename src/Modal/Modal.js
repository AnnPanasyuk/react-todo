import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button>Open Modal</button>

                <div className="modal">
                    <div className="modal-body">
                        <h1>Modal Title</h1>
                        <p>Some modal</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}