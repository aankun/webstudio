import { createStitches } from "@stitches/react";
import {
  amber,
  amberA,
  amberDark,
  amberDarkA,
  blackA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  bronze,
  bronzeA,
  bronzeDark,
  bronzeDarkA,
  brown,
  brownA,
  brownDark,
  brownDarkA,
  crimson,
  crimsonA,
  crimsonDark,
  crimsonDarkA,
  cyan,
  cyanA,
  cyanDark,
  cyanDarkA,
  gold,
  goldA,
  goldDark,
  goldDarkA,
  grass,
  grassA,
  grassDark,
  grassDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  indigo,
  indigoA,
  indigoDark,
  indigoDarkA,
  lime,
  limeA,
  limeDark,
  limeDarkA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  mint,
  mintA,
  mintDark,
  mintDarkA,
  olive,
  oliveA,
  oliveDark,
  oliveDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
  pink,
  pinkA,
  pinkDark,
  pinkDarkA,
  plum,
  plumA,
  plumDark,
  plumDarkA,
  purple,
  purpleA,
  purpleDark,
  purpleDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  sage,
  sageA,
  sageDark,
  sageDarkA,
  sand,
  sandA,
  sandDark,
  sandDarkA,
  sky,
  skyA,
  skyDark,
  skyDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  teal,
  tealA,
  tealDark,
  tealDarkA,
  tomato,
  tomatoA,
  tomatoDark,
  tomatoDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  whiteA,
  yellow,
  yellowA,
  yellowDark,
  yellowDarkA,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";

const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...oliveA,
      ...sandA,
      ...tomatoA,
      ...redA,
      ...crimsonA,
      ...pinkA,
      ...plumA,
      ...purpleA,
      ...violetA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...mintA,
      ...cyanA,
      ...tealA,
      ...greenA,
      ...grassA,
      ...limeA,
      ...yellowA,
      ...amberA,
      ...orangeA,
      ...brownA,
      ...bronzeA,
      ...goldA,

      ...whiteA,
      ...blackA,

      // Semantic colors
      hiContrast: "$slate12",
      loContrast: "$slate1",
      hint: "$slate10",
      muted: "$slate6",
      primary: "$blue12",
      canvas: "hsl(0 0% 93%)",
      panel: "white",
      panelOutline: "hsl(0deg 0% 0% / 10%)",
      transparentPanel: "hsl(0 0% 0% / 97%)",
      shadowLight: "hsl(206 22% 7% / 35%)",
      shadowDark: "hsl(206 22% 7% / 20%)",
      background: "$slate1",
      text: "$slate12",
      dropPlacement: "$blue9",
    },
    fonts: {
      sans: "Inter, -apple-system, system-ui, sans-serif",
      mono: "Roboto, menlo, monospace",
    },
    opacity: {
      1: "0.4",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
      styleSection: "8px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
      sidebarLeft: "45px",
      sidebarRight: "240px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export { styled, css, theme, globalCss, keyframes, config };

export const flushCss = () => {
  const css = getCssText();
  reset();
  return css;
};

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...bronzeDarkA,
    ...goldDarkA,

    // Semantic colors
    hint: "$slate10",
    muted: "$slate8",
    primary: "$blue9",
    hiContrast: "$slate12",
    // radix colors in this range are either too dark/too light, nothing gray/black in the 16-17% luminosity range
    loContrast: "hsl(0 0% 17%)",
    canvas: "hsl(0 0% 15%)",
    panel: "$slate3",
    panelOutline: "hsl(0deg 0% 100% / 10%)",
    transparentPanel: "hsl(0 100% 100% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
    background: "$slate12",
    text: "$slate1",
    dropPlacement: "$blue9",
  },
});
