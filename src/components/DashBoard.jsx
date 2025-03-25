import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";

// React icons imports
import { IoIosArrowForward } from "react-icons/io";

import { LuKeyRound } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";
import { MdChecklistRtl, MdHistory, MdAccountCircle } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const NAVIGATION = [
  { kind: "header", title: "account" },

  {
    segment: "edit profile",
    title: "Edit profile",
    icon: (
      <FaUserEdit className="w-[28px] transition-colors hover:text-greencol" />
    ),
  },
  {
    segment: "reset password",
    title: "Reset password",
    icon: (
      <LuKeyRound className="w-[28px] h-[20px] transition-colors hover:text-greencol" />
    ),
  },
  { kind: "divider" },
  { kind: "header", title: "activities" },
  {
    segment: "your listing",
    title: "Your listing",
    icon: (
      <MdChecklistRtl className="w-[28px] h-[26px] transition-colors hover:text-greencol" />
    ),
  },
  {
    segment: "your activities",
    title: "Your activities",
    icon: (
      <MdHistory className="w-[28px] h-[25px] transition-colors hover:text-greencol" />
    ),
  },
  {
    segment: "Terms of use ",
    title: "Terms of use ",
    icon: (
      <FaRegFileAlt className="w-[28px] h-[20px] transition-colors hover:text-greencol" />
    ),
  },
  {
    segment: "Logout",
    title: "Logout",
    icon: (
      <FiLogOut className="w-[29px] h-[20px] transition-colors hover:text-redcol" />
    ),
  },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true },
  palette: { mode: "light" },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#7ABC871A", // Light green background on hover
          },
          "&.Mui-selected": {
            backgroundColor: "#7ABC871A !important", // Light green background when selected
            "& svg": {
              color: "#7ABC87", // Green icon color when selected
            },
          },
          "&:focus": {
            backgroundColor: "#7ABC871A",
          },
        },
      },
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
