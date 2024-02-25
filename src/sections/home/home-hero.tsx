import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import type { FC } from "react";

export const HomeHero: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: "120px",
        pb: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Entdecken Sie die Zukunft der Bildung mit&nbsp;
            <Typography component="span" color="primary.main" variant="inherit">
              <span>Edu</span>Sphere
            </Typography>{" "}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Hier könnte Ihre Werbung stehen!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
