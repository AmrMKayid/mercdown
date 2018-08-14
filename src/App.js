import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import SplitPane from 'react-split-pane';
import Editor from './editor';


class App extends Component {

    constructor(props) {
        super();

        this.state = {
            markdownSrc: "# Hello World",
        }
    }


    render() {
        return (
            <div className="App">
                <SplitPane split="vertical" defaultSize="50%">
                    <div className={"editor-pane"}>
                        <Editor className="editor" value={this.state.markdownSrc}/>
                    </div>

                    <div className={"view-pane"}></div>
                </SplitPane>
            </div>
        );
    }
}

export default App;
