import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";

import { Footer, Header, styles } from ".";
import createEmotionCache from "@source/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const emotionCache = createEmotionCache();

const LayoutContainer = ({ Component, pageProps }) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(window.innerWidth < 620);
    return () => setMobile(window.innerWidth < 620);
  });

  return (
    <CacheProvider value={emotionCache}>
      <Box maxWidth={700} m="auto" mt={3} p={2} className={styles.layout}>
        <Header />
        <Component {...pageProps} />
        <Footer mobile={mobile} />
      </Box>
    </CacheProvider>
  );
};

export default LayoutContainer;
