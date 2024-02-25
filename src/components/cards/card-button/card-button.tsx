import { InfoRounded } from "@mui/icons-material";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  imgSrc: string;
  title: string;
  subtitle: string;
  notice?: string;
  href: string;
}

export const CardButton: FC<Props> = ({
  imgSrc,
  title,
  subtitle,
  notice,
  href,
}) => {
  const router = useRouter();
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        zIndex: 1,
        "&:hover": {
          boxShadow: 4,
          cursor: "pointer",
          bgcolor: "primary.light",
        },
      }}
      onClick={() => router.push(href)}
    >
      <CardMedia
        component="img"
        width="100"
        height="100"
        alt="Zum Lernraum"
        src={imgSrc}
        sx={{
          borderRadius: "6px",
          width: { xs: "100%", sm: 100 },
          height: { xs: "100%", sm: "auto" },
        }}
      />
      <Box sx={{ alignSelf: "center", ml: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight="regular">
          {title}
        </Typography>
        <Typography fontWeight="bold" noWrap gutterBottom>
          {subtitle}
        </Typography>
        {!!notice && (
          <Chip
            size="small"
            variant="outlined"
            icon={<InfoRounded />}
            label={notice}
            sx={(theme) => ({
              ".MuiChip-icon": {
                fontSize: 16,
                ml: "4px",
                color: "success.500",
              },
              bgcolor: "success.50",
              borderColor: "success.100",
              color: "success.900",
            })}
          />
        )}
      </Box>
    </Card>
  );
};
