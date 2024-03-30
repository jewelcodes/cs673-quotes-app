import React, {useEffect, useState} from 'react';
import QuoteBody from './components/QuoteBody/QuoteBody.tsx';
import { initial, randomQuote } from './common/quote.ts';

function App() {
    let [ quote, setQuote ] = useState("Loading...");

    useEffect(() => {
        initial(setQuote);
    }, [quote]);

    return (
        <QuoteBody quote={quote} />
    )
}

export default App;
