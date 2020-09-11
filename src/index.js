import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDvwfcg4Kb_xCB7b5CjH0cA0olhubxcWO0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
    }

    render()
    {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));