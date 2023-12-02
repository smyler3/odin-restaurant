import SailBoat from "./sail-boat.svg";
import Noodles from "./noodles.svg";

export default function generateContactContent(parent) {
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
        //         <span class="contact-info">
        //             <div class="logos">
        //                 <img class="logo" src="../src/sail-boat.svg" alt="">
        //                 <img class="logo" src="../src/noodles.svg" alt="">
        //             </div>
        //             <p>0491 572 665</p>
        //             <p>SurgingSushi@fakeEmail.com</p>
        //             <p>123 fake street, fakeland</p>
        //         </span>
    }

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

            // Booking information footnote 
            const bookingInfo = document.createElement("p");
            bookingInfo.classList.add("booking-info", "center-text");
            bookingInfo.textContent = "Please note reservations are limited and essential";

            hours.appendChild(bookingInfo);
        
            return hours;
        }

        const hoursInfo = document.createElement("span");
        hoursInfo.classList.add("hours-info");

        // Title
        const title = document.createElement("h2");
        title.textContent = "Opening Hours";

        // Opening Hours
        hoursInfo.appendChild(title);
        hoursInfo.appendChild(generateOpeningHours());

        return hoursInfo;
        //         <span class="hours-info">
        //             <h2>Opening Hours</h2>
        //             <div class="hours">
        //                 <p><b>Monday:</b> Closed</p>
        //                 <p><b>Tuesday:</b> Closed</p>
        //                 <p><b>Wednesday:</b> 6PM - 12PM</p>
        //                 <p><b>Thursday:</b> 6PM - 12PM</p>
        //                 <p><b>Friday:</b> 4PM - 12PM</p>
        //                 <p><b>Saturday:</b> 4PM - 12PM</p>
        //                 <p><b>Sunday:</b> 4PM - 12PM</p>
        //             </div>
        //             <div class="booking-info center-text">
        //                 Please note reservations are limited and essential
        //             </div>
        //         </span>
    }

    function generateTeamInfo() {
        function generateStaffCards(parent) {
            const staff = [
                {
                    name: "Remy",
                    nickname: "Little Chef",
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
                name.textContent = `${member.name} ${member.nickname ? `<i>"${member.nickname}"</i>` : ""}`;
        
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
        //         <span class="team-info center-text">
        //             <h2>Meet the Team</h2>
        //             <div class="staff-card">
        //                 <div class="staff-name"><p class="name"><b>Remy <i>"Little Chef"</i></b></p></div>
        //                 <p class="staff-blurb">Remy, the culinary conductor in this exclusive kitchen, has curated a symphony of flavors for the high-dining sushi experience.
        //                     With precision and an artist's touch, he composes a menu that showcases the pinnacle of sushi craftsmanship.</p>
        //                 <div class="dishes">
        //                     <p>Signature Omakase Platter</p>
        //                     <p>Truffle-Infused Toro Nigiri</p>
        //                     <p>Uni and Quail Egg Gunkan</p>
        //                     <p>Foie Gras and Fig Nigiri</p>
        //                     <p>Soy-Glazed Wagyu Beef Roll</p>
        //                     <p>Matcha-infused Dessert Sushi</p>
        //                 </div>
        //             </div>
        //             <div class="staff-card">
        //                 <div class="staff-name"><p class="name"><b>Alfredo Linguini Gusteau</b></p></div>
        //                 <p class="staff-blurb">Linguini, Remy's aspiring human collaborator, skillfully crafts a supporting ensemble of sides drawing from French and Mediterranean influences.
        //                     These dishes dance in harmony with Remy's creations, elevating the dining experience to a crescendo of flavors.</p>
        //                 <div class="dishes">
        //                     <p>Amuse-Bouche Trio</p>
        //                     <p>Scallop Ceviche with Citrus</p>
        //                     <p>Lobster Tail with Herb Butter</p>
        //                     <p>Electric Eel "Sous Vide"</p>
        //                 </div>
        //             </div>
        //         </span>
    }

    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body"); 

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    // Page title
    const title = document.createElement("h1");
    title.textContent = "Contact Information";
    title.classList.add("center-text");

    // Adding elements
    contactContent.appendChild(generateContactInfo());
    contactContent.appendChild(generateHoursInfo());
    contactContent.appendChild(generateTeamInfo());

    contentBody.appendChild(contactContent);

    parent.appendChild(contentBody);
    // <div class="content-body">
    //     <h1 class="center-text">Contact Information</h1>
    //     <div class="sub-content">
    //         <div class="contact-info">
    //             <div class="logos">
    //                 <img class="logo" src="../src/sail-boat.svg" alt="">
    //                 <img class="logo" src="../src/noodles.svg" alt="">
    //             </div>
    //             <p>0491 572 665</p>
    //             <p>SurgingSushi@fakeEmail.com</p>
    //             <p>123 fake street, fakeland</p>
    //         </div>
    //         <div class="hours-info">
    //             <h2>Opening Hours</h2>
    //             <div class="hours">
    //                 <p><b>Monday:</b> Closed</p>
    //                 <p><b>Tuesday:</b> Closed</p>
    //                 <p><b>Wednesday:</b> 6PM - 12PM</p>
    //                 <p><b>Thursday:</b> 6PM - 12PM</p>
    //                 <p><b>Friday:</b> 4PM - 12PM</p>
    //                 <p><b>Saturday:</b> 4PM - 12PM</p>
    //                 <p><b>Sunday:</b> 4PM - 12PM</p>
    //             </div>
    //             <div class="booking-info center-text">
    //                 Please note reservations are limited and essential
    //             </div>
    //         </div>
    //         <span class="team-info center-text">
    //             <h2>Meet the Team</h2>
    //             <div class="staff-card">
    //                 <div class="staff-name"><p class="name"><b>Remy <i>"Little Chef"</i></b></p></div>
    //                 <p class="staff-blurb">Remy, the culinary conductor in this exclusive kitchen, has curated a symphony of flavors for the high-dining sushi experience.
    //                     With precision and an artist's touch, he composes a menu that showcases the pinnacle of sushi craftsmanship.</p>
    //                 <div class="dishes">
    //                     <p>Signature Omakase Platter</p>
    //                     <p>Truffle-Infused Toro Nigiri</p>
    //                     <p>Uni and Quail Egg Gunkan</p>
    //                     <p>Foie Gras and Fig Nigiri</p>
    //                     <p>Soy-Glazed Wagyu Beef Roll</p>
    //                     <p>Matcha-infused Dessert Sushi</p>
    //                 </div>
    //             </div>
    //             <div class="staff-card">
    //                 <div class="staff-name"><p class="name"><b>Alfredo Linguini Gusteau</b></p></div>
    //                 <p class="staff-blurb">Linguini, Remy's aspiring human collaborator, skillfully crafts a supporting ensemble of sides drawing from French and Mediterranean influences.
    //                     These dishes dance in harmony with Remy's creations, elevating the dining experience to a crescendo of flavors.</p>
    //                 <div class="dishes">
    //                     <p>Amuse-Bouche Trio</p>
    //                     <p>Scallop Ceviche with Citrus</p>
    //                     <p>Lobster Tail with Herb Butter</p>
    //                     <p>Electric Eel "Sous Vide"</p>
    //                 </div>
    //             </div>
    //         </span>
    //     </div>
    // </div>

}