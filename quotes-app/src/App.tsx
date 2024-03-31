import React, {useEffect, useState} from 'react';
import QuoteBody from './components/QuoteBody/QuoteBody.tsx';
import Footer from './components/Footer/Footer.tsx';
import { initial, randomQuote } from './common/quote.ts';

function App() {
    let [ quote, setQuote ] = useState("Loading...");
    let [ author, setAuthor ] = useState("");

    useEffect(() => {
        initial(setQuote, setAuthor);
    }, [quote]);

    return (
        <>
            <QuoteBody quote={quote} author={author} />
            <Footer quoteHandler={setQuote} authorHandler={setAuthor} />
        </>
    )
}

export default App;
