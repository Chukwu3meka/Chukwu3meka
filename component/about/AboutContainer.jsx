import { About } from ".";

const PortFolio = () => {
  const articles = [
    {
      title: "A Practical Example Using MongoDB Atlas Search",
      link: "https://chukwu3meka.medium.com/a-practical-example-using-mongodb-atlas-search-144ab2d4ed78",
    },
    {
      title: "Software Developer interview preparation",
      link: "viewcrunch.com/view/software-developer-interview-preparation-pRt9JzBJWGHjwmNuKSfV",
    },
    {
      title: "Firebase social auth with latest SDK 9",
      link: "https://chukwu3meka.medium.com/firebase-social-authentication-with-latest-sdk-version-9-75e4eac57563",
    },
    {
      title: "How to Make a Contact Form with Nodemailer",
      link: "https://chukwu3meka.medium.com/contact-form-with-nodemailer-3bf217db9df8",
    },
    {
      title: "Firebase vs MongoDB: Which One is the Best for Your Next App?",
      link: "https://chukwu3meka.medium.com/firebase-or-mongodb-for-your-next-app-d2d6575b0714",
    },
    {
      title: "Why you should start using Next.js",
      link: "https://chukwu3meka.medium.com/why-you-should-start-using-next-js-3241ad08b9f5",
    },
  ];

  return <About articles={articles} />;
};

export default PortFolio;
