import Image from "next/image";
import RubberBand from "react-reveal/RubberBand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Box, Typography, IconButton } from "@mui/material";

const Intro = ({ socialLink, profilePicStyle }) => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh" flexDirection="column" pt={5}>
    <Paper sx={profilePicStyle} elevation={16}>
      <Image src="/images/profile.png" layout="fill" alt="ChukwuEmeka" />
    </Paper>

    <RubberBand>
      <Typography component="h1" variant="h5" color="#808080" textAlign="center" pt={2}>
        I'm ChukwuEmeka
      </Typography>
    </RubberBand>

    <Typography component="h2" variant="body1" textAlign="justify" sx={{ textAlignLast: "center", my: 2 }} color="#444343">
      Hey there! I'm a <b>Fullstack developer</b> 😎 with a strong focus on Frontend development. I'm currently building and maintaining
      internal apps at Zenith bank. I've worked recently on - <b>Web Apps</b>: Next.js(React Framework), Svelte and Angular, <b>APIs</b>:
      RESTful APIs and GraphQL, <b>Server</b>: Express.js (Node.js Framework), <b>Mobile Apps</b>: Flutter &amp; React Native, and{" "}
      <b>Desktop Apps</b>: Electron.js. I'm also a <b>Computer Science</b> graduate 🎓.
      <br />
      <br />
      - 💞️ I’m looking to collaborate on Open source Projects
      <br />- 📚 I’m Currently learning <b>Flutter</b> and also <b>Software Security</b>
      <br />- 💰 I’m currently working on an interesting project that will be made public soon 👀 using Next.js and MongoDB
      {/* I’m a Full stack Developer with {new Date().getFullYear() - 2018} years experience in blending the art of design with a programming
      talent to deliver engaging user experiences through efficient design, development, proactive feature optimization, and relentless
      debugging, with adequate security in place. I find my strength at the Frontend, and as a React(Next.Js) developer who enjoys using
      Container components and Functional Programming paradigm. I have wide knowledge of react.js core principles to develop new features
      and to build reusable components with responsive designs. */}
    </Typography>

    <Box display="flex">
      {socialLink.map(({ href, icon }, index) => (
        <a key={index} href={href} target="_blank">
          <IconButton color="secondary">
            <FontAwesomeIcon icon={icon} />
          </IconButton>
        </a>
      ))}
    </Box>
  </Box>
);

export default Intro;
