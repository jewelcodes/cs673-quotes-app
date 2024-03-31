import React from 'react';
import './Footer.css';
import { newQuote } from '../../common/quote.ts';

function Footer(props:any) {
    return (
        <div className="footer">
            <label onClick={() => newQuote(props.quoteHandler, props.authorHandler)}>Random Quote</label>&nbsp;&ndash;&nbsp;
            <a href="https://github.com/jewelcodes/cs673-quotes-app">GitHub</a><br />
            Made with 💗
        </div>
    )
}

export default Footer;