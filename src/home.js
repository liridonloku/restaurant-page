import Restaurant from './restaurant.jpg';

export default function homePane(main){
    const restaurant = new Image();
    restaurant.src = Restaurant;
    restaurant.setAttribute('loading', 'lazy');
    const text = document.createElement('p');
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id porta nibh venenatis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultrices dui sapien eget mi proin sed libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Ut tellus elementum sagittis vitae et leo. Eget duis at tellus at urna condimentum. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Pulvinar pellentesque habitant morbi tristique senectus et netus. Purus non enim praesent elementum facilisis leo. Aenean et tortor at risus viverra adipiscing at. Massa ultricies mi quis hendrerit. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.";
    main.appendChild(restaurant);
    console.log(restaurant);
    main.appendChild(text);
}