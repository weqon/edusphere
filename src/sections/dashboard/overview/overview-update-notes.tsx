import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export const OverviewUpdateNotes: FC = (props) => {
  const { t } = useTranslation();

  return (
    <Stack
      alignItems="center"
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={4}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "primary.darkest"
            : "primary.lightest",
        borderRadius: 2.5,
        p: 4,
      }}
      {...props}
    >
      <Box
        sx={{
          width: 200,
          "& img": {
            width: "100%",
          },
        }}
      >
        <img src="/assets/person-standing.png" />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography color="primary.main" variant="overline">
          {t("update_notes")}
        </Typography>
        <Typography color="text.primary" sx={{ mt: 2 }} variant="h6">
          {t("Ein neues Update ist verfügbar!")}
        </Typography>
        <Typography color="text.primary" sx={{ mt: 1 }} variant="body1">
          Hier stehen Neuigkeiten!
        </Typography>
      </Box>
    </Stack>
  );
};

OverviewUpdateNotes.propTypes = {
  onDismiss: PropTypes.func,
};
