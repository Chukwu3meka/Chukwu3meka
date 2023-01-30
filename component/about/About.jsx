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
            Building innovative solutions with code and creativity, I am a Fullstack Developer at Zenith Bank where I bring ideas to life. With a strong focus on Frontend
            development, I have a track record of delivering cutting-edge internal apps for the bank. Explore my passion for technology on my Github profile at
            https://github.com/chukwu3meka and follow me on my journey as a developer.
            <br />
            My love for computers drives me to continuously explore new tools and techniques through self-study, tutorials, and professional guidance. I strive to deepen my
            understanding of subjects that captivate me, particularly in the areas of web, mobile, software development, and cybersecurity. I take pleasure in enhancing my skills
            and acquiring new ones in these fields.
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
              <Typography component="span">Desktop Apps: Electron.js.</Typography>
            </li>
            <li>
              <Typography component="span">Web Apps: Next.js, React, Svelte and Angular</Typography>
            </li>
            <li>
              <Typography component="span">APIs: RESTful APIs and GraphQL</Typography>
            </li>
            <li>
              <Typography component="span">Server: Express.js (Node.js Framework)</Typography>
            </li>
            <li>
              <Typography component="span">Mobile Apps: Flutter & React Native</Typography>
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
