import React, {useState} from 'react';
import QuoteBody from './components/QuoteBody/QuoteBody.tsx';

function App() {
    let [ quote, setQuote ] = useState("Loading...");

    return (
        <QuoteBody quote={quote} />
    )
}

export default App;