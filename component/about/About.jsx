import Fade from "react-reveal/Fade";
import Typography from "@mui/material/Typography";

import { styles } from ".";

const About = ({ articles }) => {
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
            {articles.map(({ title, link }) => (
              <li key={title}>
                <a href={link} rel="noopener noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </Fade>
      </div>
    </div>
  );
};

export default About;
