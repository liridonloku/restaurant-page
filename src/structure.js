export default function createPageStructure(content) {
    console.log("create page structure");
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = "My Restaurant";
    let nav = document.createElement('div');
    nav.classList.add('nav');
    let home = document.createElement('button');
    home.textContent = 'Home';
    let menu = document.createElement('button');
    menu.textContent = 'Menu';
    let contact = document.createElement('button');
    contact.textContent = 'Contact';
    let main = document.createElement('div');
    main.classList.add('main');
    let footer = document.createElement('footer');
    footer.textContent = 'Made by liridonloku, September 2021';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    header.appendChild(title);
    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
}