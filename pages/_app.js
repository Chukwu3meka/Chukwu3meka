import Head from "next/head";
import { useEffect } from "react";
import PropTypes from "prop-types";

import muiTheme from "@source/theme";
import { SnackbarProvider } from "notistack";
import LayoutContainer from "@component/layout";
import { ThemeProvider } from "@mui/material/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// don't forget to add this else you won't see font awesome in production
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// https://fontawesome.com/v6/docs/web/use-with/react/use-with

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>Maduekwe Chukwuemeka</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="keywords" content="Developer" />
        <meta property="quote" content="Benedictus sit Deus" />
        <meta property="image" content="/images/profile.png" />
        <meta property="title" content="Chukwuemeka: Developer" />
        <meta name="theme-color" content="rgba(255, 150, 40, 1)" />
        <meta name="description" content="Chukwuemeka: Full stack Devloper" />
        <meta property="url" content="https://chukwuemeka.vercel.app" />
        <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
        {/* <!-- og  --> */}
        <meta property="og:title" content="Chukwuemeka: Full stack Developer" />
        <meta property="og:quote" content="Benedictus sit Deus" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="https://chukwuemeka.vercel.app" />
        <meta property="og:hashtag" content="#Chukwuemeka" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="180" />
        <meta property="og:site_name" content="Chukwuemeka" />
        <meta property="og:description" content="Full stack Developer" />
        <meta property="og:image:alt" content="Chukwuemeka Image" />
        <meta property="og:image" itemProp="image" content="/images/profile.png" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:site" content="@viewcrunch" />
        <meta name="twitter:creator" content="@Chukwuemeka" />
        <meta name="twitter:image:alt" content="Chukwuemeka Image" />
        <meta property="twitter:title" content="Maduekwe Chukwuemeka" />
        <meta property="twitter:image" content="/images/profile.png" />
        <meta property="twitter:url" content="https://www.twitter.com/maduekwepedro" />
        <meta property="twitter:description" content="Full stack Developer" />
        <meta property="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <SnackbarProvider maxSnack={1} preventDuplicate>
          <LayoutContainer pageProps={pageProps} Component={Component} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
