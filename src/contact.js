export default function contactPane(main){
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    const contact = document.createElement('h1');
    contact.textContent = "Contact: ";
    const phone = document.createElement('p');
    phone.textContent = "Phone no: +123-45678-9";
    const address = document.createElement('p');
    address.textContent = "Address: P. Sherman, 42, Wallaby Way, Sydney!"
    const email = document.createElement('p');
    email.textContent = "Email: myrestaurant@restaurant.com";
    contactInfo.appendChild(contact);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);
    contactInfo.appendChild(email);
    main.appendChild(contactInfo);
}