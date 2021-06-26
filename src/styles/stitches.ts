import { createCss } from "@stitches/react"

export const {
  theme,
  styled,
  getCssString,
  css,
  keyframes,
  global: createGlobalStyles,
} = createCss({
  theme: {
    colors: {
      primaryBackground: "#ffffff",
      secondaryBackground: "#fafafa",
      terciaryBackground: "#f6f6f6",
      borderColor: "#e8e8e8",
      primaryFill: "#000000",
      secondaryFill: "#666666",
    },
    space: {
      1: "10px",
      2: "20px",
      3: "60px",
    },
    fontSizes: {
      1: "16px",
    },
    fonts: {
      DMSans: "DM Sans, apple-system, sans-serif",
      monospace: "menlo, monospace",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
  },
})

export const globalStyles = createGlobalStyles({
  // Reset
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, hr, a, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, button, video":
    {
      margin: 0,
      padding: 0,
    },

  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section":
    {
      display: "block",
    },

  "h1, h2, h3, h4, h5, h6": { fontSize: "100%" },

  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },

  "strong, b, mark": {
    fontStyle: "inherit",
    fontWeight: "bold",
  },

  "em, i, cite, q, address, dfn, var": {
    fontStyle: "normal",
    fontWeight: "inherit",
  },

  " abbr[title], dfn[title]": {
    borderBottom: "1px dotted",
    cursor: "help",
  },

  ins: { borderBottom: "1px solid" },

  "a, u, ins": { textDecoration: "none" },

  "del, s": { textDecoration: "line-through" },

  "pre, code, samp, kbd": { fontFamily: "monospace" },

  small: { fontSize: "0.75em" },

  img: {
    border: "none",
    fontStyle: "italic",
    display: "block",
    maxWidth: "100%",
  },

  "input,select, textarea": { font: "inherit" },

  "h1, h2, h3, h4, h5": { fontWeight: "normal" },

  // Fonts
  "@import": [
    'url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap")',
  ],

  // Globals
  html: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
  },

  body: {
    backgroundColor: "$primaryBackground",
    color: "$primaryFill",
    fontFamily: "$DMSans",
    fontSize: "16px",
  },

  "*": {
    boxSizing: "border-box",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },

  h1: { fontSize: "3.815rem", fontWeight: 700 },

  h2: { fontSize: "3.052rem" },

  h3: { fontSize: "2.441rem" },

  h4: { fontSize: "1.953rem" },

  h5: { fontSize: "1.563rem" },

  h6: { fontSize: "1.250rem" },

  blockquotes: {},

  p: { fontSize: "1rem" },

  a: {
    color: "$secondaryFill",

    "&:hover": {
      color: "$primaryFill",
    },
  },

  "h1,h2,h3,h4,h5,h6,p": {
    marginBottom: "$2",
  },

  hr: {
    border: "none",
    width: "100%",
    height: "1px",
    background: "$borderColor",
    marginTop: "$3",
    marginBottom: "$3",
  },

  pre: {
    padding: "$2",
    borderRadius: "4px",
    backgroundColor: "$secondaryBackground",
    fontFamily: "$monospace",
  },
})
