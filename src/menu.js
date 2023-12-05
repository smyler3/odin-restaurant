export default function generateMenuContent(parent) {
    /* Creates the entire menu section */
    function generateMenu() {
        /* Creates the menu list of foods */
        function generateMenuList() {
            /* Creates list items for each food in the given array */
            function generateMenuItems(foods) {
                foods.forEach(food => {
                    const menuItem = document.createElement("li");
                    menuItem.classList.add("menu-item");
    
                    const name = document.createElement("p");
                    name.textContent = food.name;
    
                    const price = document.createElement("p");
                    price.textContent = food.price;
    
                    menuItem.appendChild(name);
                    menuItem.appendChild(price);
    
                    menuList.appendChild(menuItem);
                })
            }

            // Names and prices of main dishes
            const mains = [
                {name: "Signature Omakase Platter", price: "120"},
                {name: "Truffle-Infused Toro Nigiri", price: "25"},
                {name: "Uni and Quail Egg Gunkan", price: "30"},
                {name: "Foie Gras and Fig Nigiri", price: "35"},
                {name: "Soy-Glazed Wagyu Beef Roll", price: "50"},
                {name: "Matcha-Infused Dessert Sushi Platter", price: "40"},
            ]

            // Names and prices of side dishes
            const sides = [
                {name: "Amuse-Bouche Trio", price: "30"},
                {name: "Scallop Ceviche with Citrus", price: "35"},
                {name: "Truffle-Infused Risotto", price: "40"},
                {name: "Lobster Tail with Herb Butter", price: "55"},
            ]

            const menuList = document.createElement("ul");
            menuList.classList.add("menu-list");

            // Sushi Section Title   
            const sushiSectionTitle = document.createElement("h3");
            sushiSectionTitle.classList.add("menu-subsection-title");
            sushiSectionTitle.textContent = "Sushi";

        
            // Sides Section Title
            const sidesSectionTitle = document.createElement("h3");
            sidesSectionTitle.classList.add("menu-subsection-title");
            sidesSectionTitle.textContent = "Sides";

            // Adding Content
            menuList.appendChild(sushiSectionTitle);
            generateMenuItems(mains);
            menuList.appendChild(sidesSectionTitle);
            generateMenuItems(sides);

            return menuList;
        }

        const menuContent = document.createElement("div");
        menuContent.classList.add("menu-content");

        // Menu Description
        const description = document.createElement("p");
        description.classList.add("menu-description");
        description.textContent = "As little boats gracefully deliver each dish, a dynamic performance unfolds. " +
            "Remy, the culinary conductor, introduces sushi creations inspired by regions worldwide. " +
            "From the richness of European truffle-infused toro nigiri to the playful combinations of Asian uni and quail egg gunkan, " +
            "each dish reflects a unique culinary influence. Linguini's supporting ensemble adds a crescendo with flavors from the shores of France and the Mediterranean. " +
            "From an amuse-bouche journey to a truffle-infused risotto finale, each dish contributes to this exclusive culinary performance. " +
            "In this distinctive setting, Chef's Symphony invites you to savor the precision, innovation, and finest ingredients inspired by diverse regions. " +
            "As little boats carry these regional delights through the stream, the symphony of flavors unfolds, creating a dining experience where each dish is a note in a culinary masterpiece.";

        // Adding Content
        menuContent.appendChild(description);
        menuContent.appendChild(generateMenuList());

        return menuContent;
    }

    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body");

    // Title
    const title = document.createElement("h1");
    title.textContent = "Menu";
    title.classList.add("title");

    // Adding Content
    contentBody.appendChild(title);
    contentBody.appendChild(generateMenu());

    parent.appendChild(contentBody);
}