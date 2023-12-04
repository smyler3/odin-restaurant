import "./style.css";
import generateSplashContent from "./splash";
import generateContactContent from "./contact";

function createTabListeners() {
    const replaceContent = function (contentFunction) {
        content.replaceChildren();
        contentFunction(content);
    };

    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");

    // Change content to the selected tab
    homeTab.addEventListener("click", function () {
        replaceContent(generateSplashContent)
    });
    contactTab.addEventListener("click", function () {
        replaceContent(generateContactContent)
    });
}

const content = document.getElementById("content");
createTabListeners();
generateSplashContent(content);