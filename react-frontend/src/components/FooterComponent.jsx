import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[],
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Right Reserved 2021 @JavaGuides</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;