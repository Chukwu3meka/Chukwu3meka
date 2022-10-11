import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

const Footer = ({ mobile }) => (
  <Box sx={{ mx: "auto", mt: 3, textAlign: "center", width: "100%" }}>
    <Fade top>
      <Divider sx={{ mb: 2 }} />
      <ButtonGroup variant="outlined" size="small" fullWidth orientation={mobile ? "vertical" : "horizontal"}>
        <Button href="https://medium.com/@chukwu3meka" rel="nofollow" target="_blank">
          Medium Posts
        </Button>
        <Button href="/assets/Chukwuemeka's Résumé.pdf" download="Chukwuemeka's Résumé (Fullstack Developer)">
          Download My Résumé
        </Button>
        <Button href="mailto:chukwuemeka@viewcrunch.com?subject=Portfolio Message!!!">Write a mail</Button>
      </ButtonGroup>

      <Typography marginTop={2} variant="body2" color="#414040">
        ● © 2018 Chukwu3meka ●
      </Typography>
    </Fade>
  </Box>
);

export default Footer;
