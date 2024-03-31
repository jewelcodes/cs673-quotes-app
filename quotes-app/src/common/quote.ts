export async function randomQuote() {
    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "PFtNqG/eBUbY+/V+sHiIDQ==7xLipHFmjLJpEQHa" }
    });
    if(!response.ok || response.status != 200) {
        return null;
    }

    let json = await response.json();
    currentQuote = json[0].quote;
    currentAuthor = json[0].author;
    return json[0].quote;
}

let currentQuote:string;
let currentAuthor:string;

export function getCurrentQuote() {
    return currentQuote;
}

let first:boolean = false;
export async function initial(quote:any, author:any) {
    if(first) return;
    first = true;
    quote(await randomQuote());
    author(currentAuthor);
    //callback("test");
}
