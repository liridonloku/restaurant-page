export default function contactPane(main){
    const contactInfo = document.createElement('div');
    const text = document.createElement('p');
    text.textContent = "This is the contact pane!";
    main.appendChild(text);
}