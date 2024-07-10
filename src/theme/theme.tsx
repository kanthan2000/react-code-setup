import { createTheme } from "@mui/material/styles";
import { colors, fontFamily } from "../utils/constants";
declare module "@mui/material/styles" {
  interface Theme {
    sea: {
      main: string;
      dark?: string;
      light?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
    };
    sandal: {
      main: string;
    };
    black: {
      main: string;
      light: string;
      dark: string;
      100?: string;
    };
    white: {
      main?: string;
    };
    green: {
      light: string;
      main: string;
      dark: string;
      100: string;
      200: string;
      300: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    blue: {
      main: string;
      dark: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700?: string;
      750: string;
      800: string;
      850: string;
      900: string;
      950: string;
      1000: string;
    };
    grey: {
      A100: string;
      A200: string;
      A400: string;
      A700: string;
      50: string;
      100: string;
      200: string;
      250: string;
      300: string;
      350: string;
      400: string;
      500: string;
      600: string;
      700: string;
      750: string;
      800: string;
      850: string;
      900: string;
      950: string;
    };

    red: {
      main: string;
      dark: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    yellow: {
      dark: string;
      light: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    sea?: {
      main?: string;
      dark?: string;
      light?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
    };
    sandal?: {
      main?: string;
    };
    black?: {
      main?: string;
      light?: string;
      dark?: string;
      100?: string;
    };
    white?: {
      main?: string;
    };
    green?: {
      light?: string;
      main?: string;
      dark?: string;
      100?: string;
      200?: string;
      300?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
    };
    blue: {
      main: string;
      dark: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600?: string;
      700: string;
      750: string;
      800: string;
      850: string;
      900: string;
      950: string;
      1000: string;
    };
    grey: {
      A100: string;
      A200: string;
      A400: string;
      A700: string;
      50: string;
      100: string;
      200: string;
      250: string;
      300: string;
      350: string;
      400: string;
      500: string;
      600: string;
      700: string;
      750: string;
      800: string;
      850: string;
      900: string;
      950: string;
    };
    red: {
      main: string;
      dark: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    yellow: {
      dark: string;
      light: string;
    };
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    sea: true;
    lightRed: true;
    red: true;
    lightGreen: true;
    lightGrey: true;
    lightBlue: true;
  }
}

interface ThemeInterface {
  primaryColor: string;
  secondaryColor: string;
}

export default function theme({
  primaryColor,
  secondaryColor,
}: ThemeInterface) {
  return createTheme({
    palette: {
      primary: {
        // ...colors.blue,
        main: primaryColor,
      },
      secondary: {
        // ...colors.green,
        main: secondaryColor,
      },
      text: {
        primary: colors.black.main,
        secondary: colors.grey[100],
      },
      grey: {
        ...colors.grey,
      },
      warning: {
        ...colors.warning,
      },
    },
    blue: {
      ...colors.blue,
    },
    sea: {
      ...colors.sea,
    },

    grey: {
      ...colors.grey,
    },

    sandal: {
      ...colors.sandal,
    },

    black: {
      ...colors.black,
    },
    white: {
      ...colors.white,
    },
    green: {
      ...colors.green,
    },
    red: {
      ...colors.red,
    },
    yellow: {
      ...colors.yellow,
    },

    typography: {
      fontFamily: fontFamily,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontSize: 24,
        fontWeight: 600,
      },
      h3: {
        fontSize: 20,
        fontWeight: 600,
      },
      h4: {
        fontSize: 20,
        fontWeight: 500,
      },
      h5: {
        fontSize: 16,
        fontWeight: 600,
      },
      h6: {
        fontSize: 16,
        fontWeight: 500,
      },
      body1: {
        fontSize: 14,
        fontWeight: 500,
      },
      body2: {
        fontSize: 14,
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: 12,
        fontWeight: 400,
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
        fontSize: "14px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "6px",
            padding: "10px 16px",
          },
          contained: ({ ownerState }) => ({
            ...(ownerState.color === "primary" && {
              ":hover": {
                backgroundColor: primaryColor,
              },
              "&.Mui-disabled": {
                color: colors.white.main,
                backgroundColor: primaryColor,
                opacity: 0.3,
              },
            }),
          }),
          outlined: ({ ownerState }) => ({
            ...(ownerState.color === "primary" && {
              ":hover": {
                backgroundColor: primaryColor,
                color: colors.white.main,
              },
              "&.Mui-disabled": {
                color: colors.grey[300],
                border: `1px solid ${colors.grey[300]}`,
              },
            }),
          }),
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: "8px",
            color: colors.grey[400],
            "&:hover": {
              backgroundColor: colors.grey[500],
              color: colors.black.light,
            },
            "&.Mui-checked": {
              "&:hover": {
                backgroundColor: colors.grey[500],
                color: primaryColor,
              },
            },
            "& .MuiSvgIcon-fontSizeMedium": {
              height: "18px",
              width: "18px",
            },
            "&.Mui-disabled": {
              color: colors.grey[700],
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root": {
              height: "20px",
              width: "20px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: colors.grey[800],
            borderWidth: "0.5px",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            height: "auto",
            padding: "4px 6px 6px 6px",
            borderRadius: "12px",
            "& .MuiChip-label": {
              padding: "0px",
            },
            "& .MuiChip-deleteIcon": {
              margin: "0px",
            },
          },
        },
        variants: [
          {
            props: { variant: "sea" },
            style: {
              backgroundColor: colors.sea.main,
              color: colors.white.main,
            },
          },
          {
            props: { variant: "lightRed" },
            style: {
              backgroundColor: colors.red.light,
              color: colors.red[100],
            },
          },
          {
            props: { variant: "red" },
            style: {
              backgroundColor: colors.red.dark,
              color: colors.white.main,
            },
          },
          {
            props: { variant: "lightGreen" },
            style: {
              backgroundColor: colors.green.light,
              color: colors.green[100],
            },
          },
          {
            props: { variant: "lightGrey" },
            style: {
              backgroundColor: colors.grey[950],
              color: colors.grey[100],
            },
          },
          {
            props: { variant: "lightBlue" },
            style: {
              backgroundColor: colors.blue[700],
              color: colors.blue[800],
            },
          },
        ],
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 33,
            height: 18,
            padding: 0,
            display: "flex",
            "&:active": {
              "& .MuiSwitch-thumb": {
                width: 15,
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(9px)",
              },
            },
            "& .MuiSwitch-switchBase": {
              padding: 2,
              "&.Mui-checked": {
                transform: "translateX(15px)",
                color: colors.white.main,
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: primaryColor,
                },
              },
            },
            "& .MuiSwitch-thumb": {
              width: 14,
              height: 14,
              borderRadius: "100%",
            },
            "& .MuiSwitch-track": {
              borderRadius: "100px",
              opacity: 1,
              backgroundColor: colors.grey[900],
              boxSizing: "border-box",
            },
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            "&.Mui-completed": {
              color: colors.green.main,
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: primaryColor,
          },
          arrow: {
            "&::before": {
              backgroundColor: primaryColor,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiFormLabel-asterisk": {
              color: colors.red.main,
            },
          },
        },
      },
    },
  });
}
