import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should replace some HTML
const App = () => {
    return <div>Hi!</div>
}

//Take this component generated html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));