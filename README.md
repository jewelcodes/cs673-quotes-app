# Quotes app for MET CS 673
This is the second part of assignment 4 for MET CS 673 - Software Engineering taken in spring 2024. It uses [api-ninjas](https://api-ninjas.com/api/quotes) instead of the [forismatic API](https://forismatic.com/en/api/) suggested in the assignment instructions, due to strict CORS restrictions on the forismatic end.

A function to search for quotes by author or content was not implemented because neither API provides an endpoint with that functionality.

Much like the weather app assignment, this was also done in TypeScript using React. A demo is available at [https://quotes.jewelcodes.io/](https://quotes.jewelcodes.io/), with the UI inspired by [Co–Star](https://www.costarastrology.com). 

The actual API fetch code is in `src/common/quote.ts`.
