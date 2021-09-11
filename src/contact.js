export default function contactPane(main){
    const contactInfo = document.createElement('div');
    const phone = document.createElement('p');
    phone.textContent = "Phone no: +123-45678-9";
    const address = document.createElement('p');
    address.textContent = "P.Sherman, 42, Wallaby Way, Sydney!"
    const email = document.createElement('p');
    email.textContent = "myrestaurant@restaurant.com"
    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);
    contactInfo.appendChild(email);
    main.appendChild(contactInfo);
}