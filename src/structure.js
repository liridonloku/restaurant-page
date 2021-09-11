import homePane from './home.js';
import menuPane from './menu.js';
import contactPane from './contact.js';

export default function createPageStructure(content) {
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = "My Restaurant";
    let nav = document.createElement('div');
    nav.classList.add('nav');
    let home = document.createElement('button');
    home.textContent = 'Home';
    home.addEventListener('click', () => {
        main.replaceChildren();
        homePane(main);
    });
    let menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.addEventListener('click', () => {
        main.replaceChildren();
        menuPane(main);
    });
    let contact = document.createElement('button');
    contact.textContent = 'Contact';
    contact.addEventListener('click', () => {
        main.replaceChildren();
        contactPane(main);
    });
    let main = document.createElement('div');
    main.classList.add('main');
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Made by liridonloku, September 2021';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    header.appendChild(title);
    homePane(main);
    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
}