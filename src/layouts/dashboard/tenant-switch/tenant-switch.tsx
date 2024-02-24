import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/system/styleFunctionSx";
import PropTypes from "prop-types";
import type { FC } from "react";

import { usePopover } from "src/hooks/use-popover";

import { TenantPopover } from "./tenant-popover";

const tenants: string[] = ["Devias", "Acme Corp"];

interface TenantSwitchProps {
  sx?: SxProps;
}

export const TenantSwitch: FC<TenantSwitchProps> = (props) => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <>
      <Stack alignItems="center" direction="row" spacing={2} {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="inherit" variant="h6">
            weQon
          </Typography>
          <Typography color="neutral.400" variant="body2">
            Education
          </Typography>
        </Box>
        {/*<IconButton onClick={popover.handleOpen} ref={popover.anchorRef}>
          <SvgIcon sx={{ fontSize: 16 }}>
            <ChevronDownIcon />
          </SvgIcon>
        </IconButton>*/}
      </Stack>
      <TenantPopover
        anchorEl={popover.anchorRef.current}
        onChange={popover.handleClose}
        onClose={popover.handleClose}
        open={popover.open}
        tenants={tenants}
      />
    </>
  );
};

TenantSwitch.propTypes = {
  // @ts-ignore
  sx: PropTypes.object,
};
