import { Box, Container, Grid } from "@mui/material";
import type { NextPage } from "next";
import { CardButton } from "src/components/cards/card-button/card-button";

import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { Layout as MarketingLayout } from "src/layouts/marketing";
import { paths } from "src/paths";
import { HomeHero } from "src/sections/home/home-hero";

const Page: NextPage = () => {
  usePageView();

  return (
    <>
      <Seo />

      <HomeHero />

      <Box sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              pt: "120px",
              pb: "120px",
            }}
          >
            <Grid
              container
              textAlign={"center"}
              alignItems={"center"}
              spacing={4}
            >
              <Grid item xs={6} md={4}>
                <CardButton
                  imgSrc="/assets/moodle-logo.png"
                  title="Lernen"
                  subtitle="Lernraum betreten"
                  href={paths.dashboard.index}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <CardButton
                  imgSrc="/assets/bbb-logo.svg"
                  title="Sprechen"
                  subtitle="Meetingraum betreten"
                  href={"https://meet.weqon.net/signin"}
                  target={"_blank"}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <CardButton
                  imgSrc="/assets/elements-logo.png"
                  title="Chatten"
                  subtitle="Chatraum betreten"
                  notice="4 Neue Nachrichten"
                  href={paths.dashboard.index}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <CardButton
                  imgSrc="/assets/nextcloud-logo.png"
                  title="Dokumente"
                  subtitle="Nextcloud öffnen"
                  href={"https://cloud.weqon.net/"}
                  target={"_blank"}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
