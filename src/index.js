import logo from "./logo.png";
import opor from "./opor.png";
import batagor from "./batagor.png";
import rica from "./rica-rica.png";
import pisgor from "./pisgor.png";
import './styles.css';

const content = document.querySelector("#content")

 function homeHeading() {
   const headingContainer = document.createElement("div");
   headingContainer.classList.add("heading-container");
   const heading1 = document.createElement("h1");
   heading1.innerHTML = "Welcome to AntaResto's webpage";
   const heading2 = document.createElement("h3");
   heading2.innerHTML = "Feel a taste of Indonesian home cooking";
   headingContainer.appendChild(heading1);
   headingContainer.appendChild(heading2);

   return headingContainer;
 }

 function homeImage() {
   const iconContainer = document.createElement("div");
   iconContainer.classList.add("logo-container");
   const myIcon = new Image();
   myIcon.src = logo;
   iconContainer.appendChild(myIcon);

  return iconContainer;
}

function homeText() {
   const textContainer = document.createElement("div");
   textContainer.classList.add("text-container");
   const text1 = document.createElement("div");
   text1.innerHTML = "Hours:";
   const text2 = document.createElement("div");
   text2.innerHTML = "Tue - Sat: 11 a.m. - 10 p.m.";
   const text3 = document.createElement("div");
   text3.innerHTML = "We are closed on Mondays and Sundays.";
   textContainer.appendChild(text1);
   textContainer.appendChild(text2);
   textContainer.appendChild(text3);

 return textContainer;
}

 function home() {
   const homeContainer = document.createElement("div");
   homeContainer.classList.add("home");
   homeContainer.classList.add("container");
   homeContainer.appendChild(homeHeading());
   homeContainer.appendChild(homeImage());
   homeContainer.appendChild(homeText());

   return homeContainer;
 };

 function card(img, title, desc) {
  const card = document.createElement("div");
  card.classList.add("card");
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("food-icon-container");
    const myIcon = new Image();
    myIcon.src = img;
    iconContainer.appendChild(myIcon);
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const heading1 = document.createElement("h3");
    heading1.innerHTML = title;
    const text1 = document.createElement("div");
    text1.innerHTML = desc;
    textContainer.appendChild(heading1);
    textContainer.appendChild(text1);
  card.appendChild(textContainer);
  card.appendChild(iconContainer);
  
  return card;
 }

 function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");
  menuContainer.classList.add("container");

  const heading1 = document.createElement("h1");
  heading1.innerHTML = "Menu";
  const heading2 = document.createElement("h2");
  heading2.innerHTML = "Main Dishes";
  const heading3 = document.createElement("h2");
  heading3.innerHTML = "Snacks";

  const main = document.createElement("div");
  main.classList.add("card-container");
  const snacks = document.createElement("div");
  snacks.classList.add("card-container");

  menuContainer.appendChild(heading1);
  menuContainer.appendChild(heading2);
  main.appendChild(card(rica, "Ayam Rica-Rica", "A chicken dish of bold and spicy flavor, achieved through a blend of chili peppers, shallots, garlic, ginger, and various herbs and spices."));
  main.appendChild(card(opor, "Opor Ayam", "A creamy and mildly spiced chicken stew cooked in coconut milk, infused with aromatic spices like lemongrass, galangal, and turmeric."));
  menuContainer.appendChild(main);
  menuContainer.appendChild(heading3);
  snacks.appendChild(card(batagor, "Batagor", "Fried fish dumplings served with a delicious peanut sauce"));
  snacks.appendChild(card(pisgor, "Pisang Goreng", "Traditional snack made by frying ripe bananas coated in a batter, resulting in a crispy exterior and soft, sweet interior."));
  menuContainer.appendChild(snacks);

  return menuContainer;
};

function textContainer(heading, text) {
  const container = document.createElement("div");
  const heading1 = document.createElement("h2");
  heading1.innerHTML = heading;
  const text1 = document.createElement("div");
  text1.innerHTML = text;
  container.appendChild(heading1);
  container.appendChild(text1);

  return container;
}

function contact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");
  contactContainer.classList.add("container");

  contactContainer.appendChild(textContainer("Visit us at:", "Jalan Raya Ubud No. 15, Ubud, Gianyar, Bali, Indonesia"));
  contactContainer.appendChild(textContainer("Contact us at:", "Phone/Whatsapp: +62 812 3456 7890"));
  contactContainer.appendChild(textContainer("Visit our social media:", '<i class="fa fa-instagram" style="font-size:24px"></i>&nbsp: AntaResto_official &nbsp&nbsp&nbsp <i class="fa fa-facebook-f" style="font-size:24px"></i>&nbsp: AntaResto Official '));

  return contactContainer;
};

content.appendChild(home());

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(home());
});

menuButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menu());
});

contactButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(contact());
});

