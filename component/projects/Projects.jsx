import { Fragment } from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const Projects = ({ myProjects }) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#E5F1FA"
        fillOpacity="1"
        d="M0,320L30,293.3C60,267,120,213,180,197.3C240,181,300,203,360,181.3C420,160,480,96,540,101.3C600,107,660,181,720,192C780,203,840,149,900,128C960,107,1020,117,1080,144C1140,171,1200,213,1260,229.3C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      />
    </svg>

    <Box  position="relative">
      <Typography fontWeight={600}>My Projects</Typography>
      <List sx={{ width: "100%" }}>
        {myProjects.map(({ title, tools, desc, icon, link }, i, arr) => (
          <Fragment key={link}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>{icon}</ListItemIcon>

              <ListItemText
                primary={
                  <Link ml={-1} href={link}>
                    {title}
                  </Link>
                }
                secondary={
                  <>
                    <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                      {tools}
                    </Typography>
                    <Typography component="span">{` — ${desc}`}</Typography>
                  </>
                }
              />
            </ListItem>
            {i < arr.length - 1 && <Divider variant="inset" component="li" />}
          </Fragment>
        ))}
      </List>
      <Typography fontWeight={600}>Other Clients' Projects</Typography>
      <Typography color="text.secondary">
        Cottondroid, Zip Remit, Health Brew, Melado Digitron, Jesluv School, Transearch, etc.
      </Typography>
    </Box>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#E5F1FA"
        fillOpacity="1"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </>
);

export default Projects;
