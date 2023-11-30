import sushiBoat from "./sushi-boat.jpg";

/* Creates the splash page content */
export default function splashContent() {
    const content = document.getElementById("content");

    // The restaurant title
    const title = document.createElement("h1");
    title.textContent = "Surging Sushi";
    title.classList.add("title");
    
    // The display image
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    const displayImage = document.createElement("img");
    displayImage.src = sushiBoat;
    displayImage.alt = "Sushi boat";
    displayImage.classList.add("display-image");

    imageCard.appendChild(displayImage);

    // The restaurant description
    const description = document.createElement("h3");
    description.textContent = "The worlds first sushi train with boats. " + 
        "Dine on the finest japanese cusine, delivered by boats floating atop a gentle stream, flowing around each table. " + 
        "But be quick to select your dish from the water as electric eels wait amongst the water to shock visitors who lack nimble fingers!"

    // The headline quote
    const quote = document.createElement("p");
    const quoteBody = document.createElement("i");
    quoteBody.textContent = "The most immaculate dining experince of my life, regardless of the numbing sensation in my hands";
    quoteBody.classList.add("quote-body");
    const quoter = document.createElement("b");
    quoter.textContent = "Heston Blumenthal";

    quote.appendChild(quoteBody);
    quote.appendChild(document.createTextNode(" - "));
    quote.appendChild(quoter);

    // Attaching all content
    content.appendChild(title);
    content.appendChild(imageCard);
    content.appendChild(description);
    content.appendChild(quote);
}