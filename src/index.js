import "./style.css";
import generateSplashContent from "./splash";
import generateContactContent from "./contact";
import generateMenuContent from "./menu";

/* Allow navigating page content with tabs at top of page */
function createTabListeners() {
    /* Replaces the current page content with the given content */
    const replaceContent = function (contentFunction) {
        content.replaceChildren();
        contentFunction(content);
    };

    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");

    // Change content to the selected tab
    homeTab.addEventListener("click", () => {
        replaceContent(generateSplashContent);
    });

    menuTab.addEventListener("click", () => {
        replaceContent(generateMenuContent);
    })

    contactTab.addEventListener("click", () => {
        replaceContent(generateContactContent);
    });
}

const content = document.getElementById("content");
createTabListeners();
generateSplashContent(content);