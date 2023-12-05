import sushiBoat from "./sushi-boat.jpg";

/* Creates the splash page content */
export default function generateSplashContent(parent) {
    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body"); 

    // Restaurant title
    const title = document.createElement("h1");
    title.textContent = "Surging Sushi";
    title.classList.add("title");
    
    // Display image
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    const displayImage = document.createElement("img");
    displayImage.src = sushiBoat;
    displayImage.alt = "Sushi boat";
    displayImage.classList.add("display-image");

    imageCard.appendChild(displayImage);

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container"); 

    // Restaurant description
    const description = document.createElement("h3");
    description.classList.add("restaurant-description");
    description.textContent = "The sushi-train experience you know and love with a fresh new twist. Dine on the finest Japanese and global cuisine, delivered by boats floating atop a gentle stream, flowing around each table. " +
    "But be quick to select your dish from the water as electric eels wait amongst the water to shock visitors who lack nimble fingers! " +
    "As the chef behind our culinary creations, I am thrilled to welcome you to a world where precision meets innovation, and tradition dances with creativity. "
    "Our commitment is to craft not just dishes, but a symphony of flavors that tantalize your taste buds and transport you to culinary bliss. Each ingredient is carefully selected, and every dish is a celebration of the finest Japanese cuisine with a touch of global inspiration. " +
    "As you embark on this culinary journey, savor each bite, appreciate the artistry, and let the gentle flow of our sushi boats enhance the magic of your dining experience."

    // Headline quote
    const quote = document.createElement("p");
    const quoteBody = document.createElement("i");
    quoteBody.textContent = "The most immaculate dining experince of my life, regardless of the numbing sensation in my hands";
    quoteBody.classList.add("quote-body");
    const quoter = document.createElement("b");
    quoter.classList.add("quoter");
    quoter.textContent = "Heston Blumenthal";

    quote.appendChild(quoteBody);
    quote.appendChild(document.createTextNode(" - "));
    quote.appendChild(quoter);

    textContainer.appendChild(description);
    textContainer.appendChild(quote);

    // Attaching all content
    contentBody.appendChild(title);
    contentBody.appendChild(imageCard);
    contentBody.appendChild(textContainer);

    parent.appendChild(contentBody);
}