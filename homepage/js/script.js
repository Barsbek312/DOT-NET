const partnersCardTemplate = document.querySelector('[data-partners-template]');
const partnersCardContainer = document.querySelector('[data-partners-card-container]');
const searchInput = document.querySelector('[data-search]');

let partners = []

searchInput.addEventListener('input',  e => {
    const value = e.target.value;
    partners.forEach(partner => {
        const isVisible = partner.name.toLowerCase().includes(value.toLowerCase());
        partner.element.classList.toggle('hide', !isVisible)
    })
})

fetch("https://62de78acccdf9f7ec2d8f0fd.mockapi.io/partners")
    .then(res => res.json())
    .then(data => {
        partners = data.map(partner => {
            const card = partnersCardTemplate.content.cloneNode(true).children[0];
            const partnersImg = card.querySelector('[data-image]');
            const partnersTitle = card.querySelector('[data-title]');
            partnersImg.src = partner.imageURL
            partnersTitle.textContent = partner.name
            partnersCardContainer.append(card)
            return({name: partner.name, image: partner.imageURL, element: card})
        });
    });

const topicsCardTemplate = document.querySelector('[data-topics-template]');
const topicsCardContainer = document.querySelector('[data-topics-card-container]');
const searchSecondInput = document.querySelector('[data-second-search]');

let topics = []

searchSecondInput.addEventListener('input',  e => {
    const value = e.target.value;
    topics.forEach(topic => {
        const isVisible = topic.title.toLowerCase().includes(value.toLowerCase());
        topic.element.classList.toggle('hide', !isVisible)
    })
})

fetch("https://62de78acccdf9f7ec2d8f0fd.mockapi.io/topics")
    .then(res => res.json())
    .then(data => {
        topics = data.map(topic => {
            const card = topicsCardTemplate.content.cloneNode(true).children[0];
            const topicsTitle = card.querySelector('[data-title]');
            const topicsText = card.querySelector('[data-text]');
            topicsTitle.textContent = topic.title
            topicsText.textContent = topic.text
            topicsCardContainer.append(card)
            return({text: topic.text, title: topic.title, element: card})
        });
    });



var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/style.css";
    let darkTheme = "dark-css/dark-style.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

var check = document.getElementById("theme-btn");

check.addEventListener("click", function (){CheckTheme(); });

function CheckTheme() {
    let lightTheme = "css/style.css";
    let darkTheme = "dark-css/dark-style.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

var modal = document.getElementById('id01');
var container = document.getElementById('container-modal')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == container) {
        modal.style.display = "none";
    }
}


