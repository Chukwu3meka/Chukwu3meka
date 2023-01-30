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
      As a Fullstack developer with a strong emphasis on Frontend development, I am currently working on internal apps at Zenith Bank. My expertise lies in Web Apps using React
      frameworks (Next.js and Svelte), RESTful and GraphQL APIs, Node.js-based server (Express.js), Mobile Apps (Flutter & React Native), and Desktop Apps (Electron.js). As a
      Computer Science graduate, I am eager to participate in open-source projects and am currently expanding my skills in Flutter and Software Security. I am also working on an
      exciting project that will be made public soon, utilizing Next.js and MongoDB.
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
