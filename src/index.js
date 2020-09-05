import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDvwfcg4Kb_xCB7b5CjH0cA0olhubxcWO0';

// Create a new component. This component should replace some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//Take this component generated html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));