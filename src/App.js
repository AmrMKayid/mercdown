import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SplitPane from 'react-split-pane';


class App extends Component {
    render() {
        return (
            <div className="App">
                <SplitPane split="vertical" defaultSize="50%">
                    <div className={"editor-pane"}></div>

                    <div className={"view-pane"}></div>
                </SplitPane>
            </div>
        );
    }
}

export default App;
