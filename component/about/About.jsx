import Fade from "react-reveal/Fade";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const Contact = () => {
  return (
    <div className={styles.about}>
      <div>
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
        <Fade bottom>
          <Typography component="p">
            My passion has always been to work with Computer as a tool, My curiosity has pushed me to learning new tools either through
            Tutorials, eBooks or from Professionals and put them to practice. I try to gain knowledge on things that I find fascinating,
            and I've always enjoyed learning new skills and improving already acquired skills most especially in the field of Development
            (Web, Mobile and Software) or Cyber Security.
          </Typography>
        </Fade>
      </div>
      <div>
        <Typography variant="h4" component="h2">
          Tools
        </Typography>
        <Fade bottom>
          <ul>
            <li>
              <Typography component="span">Flutter, React Native and Electron.Js</Typography>
            </li>
            <li>
              <Typography component="span">NodeJS, Express, Mongo DB, Firebase and Atlas Search</Typography>
            </li>
            <li>
              <Typography component="span">React, Next JS, Redux, Material-UI, SASS/SCSS, and CSS3</Typography>
            </li>
            <li>
              <Typography component="span">socket.io, oAuth, JWT, Version Control</Typography>
            </li>
          </ul>
        </Fade>
      </div>

      <div>
        <Typography variant="h4" component="h2">
          Recent Posts
        </Typography>
        <Fade bottom>
          <ol>
            <li>
              <a
                href="https://javascript.plainenglish.io/a-practical-example-using-mongodb-atlas-search-144ab2d4ed78"
                rel="noopener noreferrer">
                A Practical Example Using MongoDB Atlas Search
              </a>
            </li>
            <li>
              <a
                href="https://www.viewcrunch.com/view/what-is-the-common-use-of-custom-server-in-nextjs-among-junior-developers-or-newbies-XlVGTN9nmr9HrP7M31Xz"
                rel="noopener noreferrer">
                What is the common use of custom server in nextjs
              </a>
            </li>
            <li>
              <a href="viewcrunch.com/view/software-developer-interview-preparation-pRt9JzBJWGHjwmNuKSfV" rel="noopener noreferrer">
                Software Developer interview preparation
              </a>
            </li>
            <li>
              <a
                href="https://blog.devgenius.io/firebase-social-authentication-with-latest-sdk-version-9-75e4eac57563"
                rel="noopener noreferrer">
                Firebase social authentication with latest SDK version 9
              </a>
            </li>
            <li>
              <a href="https://blog.devgenius.io/why-you-should-start-using-next-js-3241ad08b9f5" rel="noopener noreferrer">
                Why you should start using Next.js
              </a>
            </li>
            <li>
              <a href="https://javascript.plainenglish.io/firebase-or-mongodb-for-your-next-app-d2d6575b0714" rel="noopener noreferrer">
                Firebase vs MongoDB: Which One is the Best for Your Next App?
              </a>
            </li>
            <li>
              <a
                href="https://www.viewcrunch.com/view/introduction-to-client-side-rendering(csr)-and-server-side-rendering-in-react-with-focus-on-nextjs-1gCTlYB91iYOQIDYyLUw"
                rel="noopener noreferrer">
                Introduction to Client Side Rendering(CSR) and Server Side Rendering
              </a>
            </li>
          </ol>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
