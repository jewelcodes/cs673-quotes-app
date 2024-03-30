export async function randomQuote() {
    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "PFtNqG/eBUbY+/V+sHiIDQ==7xLipHFmjLJpEQHa" }
    });
    if(!response.ok || response.status != 200) {
        return null;
    }

    let json = await response.json();
    currentQuote = json[0].quote;
    return json[0].quote;
}

let currentQuote:string;
export function getCurrentQuote() {
    return currentQuote;
}

let first:boolean = false;
export async function initial(callback:any) {
    if(first) return;
    first = true;
    callback(await randomQuote());
    //callback("test");
}
