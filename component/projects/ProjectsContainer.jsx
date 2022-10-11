import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

import { Projects } from ".";

const ProjectContainer = () => {
  const myProjects = [
    {
      title: "ViewCrunch: Web",
      tools: "Next.JS, Firebase, Material-UI and SASS",
      desc: "ViewCrunch is a blog where you share your views and have access to breaking NEWS in your location. On ViewCrunch you follow crunches that publish views you're intrested in.",
      icon: <MenuBookIcon color="primary" />,
      link: "https://www.viewcrunch.com/",
    },
    {
      title: "SoccerMASS: Web",
      tools: "Next.JS, MongoDB, Node.js and socket.io",
      desc: "Soccer Manager game where you set Tactics, and make Transfer decisions. Match results are generated based on your tactics and player qualities and strength. Annually first three clubs in each divisions are promoted to the upper league",
      icon: <SportsSoccerIcon color="primary" />,
      link: "https://www.soccermass.com/",
    },
    {
      title: "Stations of the Cross: Mobile",
      tools: "Flutter",
      desc: "A mobile app deployed on Play Store where you find STation of the Cross and other Lenten prayers, with a brief Explanation on Lent.",
      icon: <NightsStayIcon color="secondary" />,
      link: "https://play.google.com/store/apps/details?id=com.viewcrunch.lentenCompanion",
    },
    {
      title: "Soccer Atlas: Web",
      tools: "Next.JS and MongoDB",
      desc: "Built to solve soccer related data issues, We dtake care of the data while you focus on your app logic. Endpoint ranging from provision of Players, Player Details, Random Players, Clubs, Club Details, Auto Complete Search etc.",
      icon: <TravelExploreIcon color="primary" />,
      link: "https://socceratlas.com/",
    },
    {
      title: "Companion: Desktop",
      tools: "Next.JS and MongoDB Atlas Search",
      desc: "This is a basic electron app for notes taking, with a complete CRUD function. Though I have used a file to serve as database, firebase will be added soon in the future.",
      icon: <DocumentScannerIcon color="success" />,
      link: "https://github.com/viewcrunch/electron-companion",
    },
    {
      title: "Crypto Currency Tracker: Web",
      tools: "React JS, RESTful API and SASS",
      desc: "Crypto Currency Tracker will fetch and display a list of the Top 20 Crypto Currencies with their live prices in USD, Market Cap and Percent Change.",
      icon: <AttachMoneyIcon color="primary" />,
      link: "https://pedroview-crypto.herokuapp.com/",
    },
    {
      title: "Calculator: Mobile",
      tools: "Next.JS and MongoDB Atlas Search",
      desc: "Cross Platform basic Calculator built using flutter.",
      icon: <CalculateIcon color="secondary" />,
      link: "https://play.google.com/store/apps/details?id=com.viewcrunch.calculator",
    },
  ];

  return <Projects myProjects={myProjects} />;
};

export default ProjectContainer;
