const { Post } = require('../models');

const postData = [
  {
    post_title: "Website Design",
    post_created: '2022-10-30',
    post_text: "Designing a website requires careful consideration of function, aesthetics and user experience. Most websites begin with a wireframe to develop the concept and ensure any relevant parties can sign off on the proposed designs. Implementing website designs is primarily managed through the use of css, or a css framework such as Bootstrap. CSS frameworks allow for streamlined processes by using classes to quickly execute styles. The interactive aspects of a website design are handled through the use of javascript.",
    user_id: 1,
  },
  {
    post_title: "eCommerce",
    post_created: '2022-2-3',
    post_text: "eCommerce is the facilitation of online transactions for goods or services. eCommerce as an industry has been steadily growing worldwide, accelerated by the limitations and social distancing imposed by the COVID-19 pandemic.",
    user_id: 5,
  },
  {
    post_title: "Handlebar templates",
    post_created: '2022-9-10',
    post_text: "Handlebar templates are a great way to standardise the design of static web elements such as navigation bars and footers. Since handlebar templates encorporate some javascript functionality, they can be much more dynamic than standard html files, and used to create multiple views and layouts.",
    user_id: 4,
  },
  {
    post_title: "API Connections",
    post_created: '2022-6-15',
    post_text: "API connections can be used to access information located in different libraries or databases. APIs can be provided by a third party, or purpose built to suit your needs. Some examples of common API connections include third party CSS frameworks or javascript applications. APIs can be used to enhance the functionality or interactivity of a website by incorporating pre-built apps like language translators.",
    user_id: 3,
  },
  {
    post_title: "Mobile Apps",
    post_created: '2022-11-30',
    post_text: "Mobile apps are designed for deployment on a mobile device such as a phone or tablet. Progressive Web Apps, or PWAs, are highly responsive applications which can be seemlessly deployed to both mobile devices and browsers with the use of service workers and caching.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
