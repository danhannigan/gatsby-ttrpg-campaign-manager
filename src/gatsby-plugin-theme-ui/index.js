export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
  },
  fonts: {
    body: "Lato, sans-serif",
    heading: "Eczar, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1200,
    content: 850,
    sidebar: 300,
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      fontFamily: "heading",
      fontSize: [4, 4, 5],
    },
    h2: {
      fontFamily: "heading",
      fontSize: [3, 4, 4],
    },
    h3: {
      fontFamily: "heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },

    a: {
      color: "secondary",
      fontWeight: "body",
      textDecoration: "none",
    },
  },

  links: {
    bold: {
      fontWeight: "bold",
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
    },
    sidebar: {
      fontWeight: "body",
      color: "secondary",
      textDecoration: "none",
    },
  },
}
