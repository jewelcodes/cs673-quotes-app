import React from 'react';
import './QuoteBody.css';

function QuoteBody(props:any) {
    return (
        <div className="quoteBody">
            <h1>{props.quote}</h1>
        </div>
    )
}

export default QuoteBody;
