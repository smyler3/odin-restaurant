import SailBoat from "./sail-boat.svg";
import Noodles from "./noodles.svg";

export default function generateContactContent(parent) {
    /* Create the contact info element */
    function generateContactInfo() {
        const contactInfo = document.createElement("span");
        contactInfo.classList.add("contact-info");

        // Logo
        const logos = document.createElement("div");
        logos.classList.add("logos");

        const sailBoat = document.createElement("img");
        sailBoat.classList.add("logo");
        sailBoat.src = SailBoat;
        sailBoat.alt = "Sail boat logo";
        const noodles = document.createElement("img");
        noodles.classList.add("logo");
        noodles.src = Noodles;
        noodles.alt = "Noodles logo";

        logos.appendChild(sailBoat);
        logos.appendChild(noodles);

        // Contact Number
        const number = document.createElement("p");
        number.textContent = "0491 572 665";

        // Contact Email
        const email = document.createElement("p");
        email.textContent = "SurgingSushi@fakeEmail.com"

        // Address
        const address = document.createElement("p");
        address.textContent = "123 Fake Street, Fakeland"

        // Adding child elements
        contactInfo.appendChild(logos);
        contactInfo.appendChild(number);
        contactInfo.appendChild(email);
        contactInfo.appendChild(address);

        return contactInfo;
    }

    /* Create the opening hours element */
    function generateHoursInfo() {
        /* Creates the opening hours schedule for the restaurant */
        function generateOpeningHours() {
            // Days and opening hours
            const days = [
                { day: "Monday", hours: "Closed" },
                { day: "Tuesday", hours: "Closed" },
                { day: "Wednesday", hours: "6PM - 12PM" },
                { day: "Thursday", hours: "6PM - 12PM" },
                { day: "Friday", hours: "4PM - 12PM" },
                { day: "Saturday", hours: "4PM - 12PM" },
                { day: "Sunday", hours: "4PM - 12PM" },
            ];

            const hours = document.createElement("div");
            hours.classList.add("hours");
        
            // Creating each individual day's opening hours
            days.forEach(day => {
                const paragraph = document.createElement("p");
                const boldText = document.createElement("b");
        
                boldText.appendChild(document.createTextNode(`${day.day}:`));
                paragraph.appendChild(boldText);
                paragraph.appendChild(document.createTextNode(` ${day.hours}`));
        
                hours.appendChild(paragraph);
            });
        
            return hours;
        }

        const hoursInfo = document.createElement("span");
        hoursInfo.classList.add("hours-info");

        // Title
        const title = document.createElement("h2");
        title.textContent = "Opening Hours";

        // Booking Information Footnote 
        const bookingInfo = document.createElement("p");
        bookingInfo.classList.add("booking-info", "center-text");
        bookingInfo.textContent = "Please note reservations are limited and essential";

        // Opening Hours
        hoursInfo.appendChild(title);
        hoursInfo.appendChild(generateOpeningHours());
        hoursInfo.appendChild(bookingInfo);

        return hoursInfo;
    }

    /* Create the meet the team element */
    function generateTeamInfo() {
        function generateStaffCards(parent) {
            const staff = [
                {
                    name: "Remy",
                    nickname: "\"Little Chef\"",
                    blurb: "Remy, the culinary conductor in this exclusive kitchen, has curated a symphony of flavors for the high-dining sushi experience." +
                        "With precision and an artist's touch, he composes a menu that showcases the pinnacle of sushi craftsmanship.",
                    dishes: [
                        "Signature Omakase Platter",
                        "Truffle-Infused Toro Nigiri",
                        "Uni and Quail Egg Gunkan",
                        "Foie Gras and Fig Nigiri",
                        "Soy-Glazed Wagyu Beef Roll",
                        "Matcha-infused Dessert Sushi",
                    ],
                },
                {
                    name: "Alfredo Linguini Gusteau",
                    nickname: null,
                    blurb: "Linguini, Remy's aspiring human collaborator, skillfully crafts a supporting ensemble of sides drawing from French and Mediterranean influences." + 
                        "These dishes dance in harmony with Remy's creations, elevating the dining experience to a crescendo of flavors.",
                    dishes: [
                        "Amuse-Bouche Trio",
                        "Scallop Ceviche with Citrus",
                        "Lobster Tail with Herb Butter",
                        "Electric Eel \"Sous Vide\"",
                    ],
                },
            ];
        
            // Creating staff cards
            staff.forEach(member => {
                const staffCard = document.createElement("div");
                staffCard.classList.add("staff-card");
        
                // Name
                const name = document.createElement("p");
                name.classList.add("staff-name");

                const nameText = document.createTextNode(`${member.name} `);
                const nickname = document.createElement("i");
                // If there's no nickname, it remains an empty string
                nickname.textContent = member.nickname || "";

                name.appendChild(nameText);
                name.appendChild(nickname);
        
                // Blurb
                const blurb = document.createElement("p");
                blurb.classList.add("staff-blurb");
                blurb.textContent = member.blurb;
        
                // Dishes
                const dishes = document.createElement("div");
                dishes.classList.add("dishes");
                member.dishes.forEach(dish => {
                    const dishElem = document.createElement("p");
                    dishElem.textContent = dish;
                    dishes.appendChild(dishElem);
                });

                // Adding elements
                staffCard.appendChild(name);
                staffCard.appendChild(blurb);
                staffCard.appendChild(dishes);
        
                // Adding to parent element
                parent.appendChild(staffCard);
            });
        }

        const teamInfo = document.createElement("span");
        teamInfo.classList.add("team-info", "center-text");

        // Title
        const title = document.createElement("h2");
        title.textContent = "Meet the Team"

        // Adding elements
        teamInfo.appendChild(title);
        generateStaffCards(teamInfo);

        return teamInfo;
    }

    /* Creates the body of content for the contact page */
    function generateContactContent() {
        const contactContent = document.createElement("div");
        contactContent.classList.add("contact-content");
    
        // Adding elements
        contactContent.appendChild(generateContactInfo());
        contactContent.appendChild(generateHoursInfo());
        contactContent.appendChild(generateTeamInfo());

        return contactContent;
    }

    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body"); 

    // Page title
    const title = document.createElement("h1");
    title.textContent = "Contact Information";
    title.classList.add("center-text");

    // Adding elements
    contentBody.appendChild(title);
    contentBody.appendChild(generateContactContent());

    parent.appendChild(contentBody);
}