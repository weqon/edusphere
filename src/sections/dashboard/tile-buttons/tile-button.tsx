import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import type { FC } from "react";

interface TileButtonProps {
  title: string;
  text: string;
  imgPath: string;
  href: string;
}

export const TileButton: FC<TileButtonProps> = (props) => {
  const { title, text, imgPath, href } = props;
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(href)}
      sx={{
        cursor: "pointer",
      }}
    >
      <Stack
        alignItems="center"
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={3}
        sx={{
          px: 4,
          py: 3,
          "&:hover": {
            bgcolor: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <div>
          <img src={imgPath} width={48} />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>
          <Typography color="text.primary" variant="h4">
            {text}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};
