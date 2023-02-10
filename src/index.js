const plugin = require("tailwindcss/plugin");

const stripes = plugin(function ({
  addBase,
  addComponents,
  addUtilities,
  matchUtilities,
  theme,
}) {
  addBase({
    ":root": {
      "--stripes-hsla": "0, 0%, 10%",
      "--stripes-angle": "-45deg",
      "--stripes-opacity": "1",
      "--stripes-size": "20px",
    },
    "@keyframes slide": {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(var(--stripes-size))" },
    },
  });

  addComponents({
    ".stripes": {
      position: "relative",
      overflow: "hidden",
      isolation: "isolate",
    },
    ".stripes::before": {
      "--stripes-color": "hsla(var(--stripes-hsla),var(--stripes-opacity))",
      content: '""',
      position: "absolute",
      zIndex: -1,
      top: "0",
      right: "0",
      height: "100%",
      width: "calc(100% + var(--stripes-size))",
      backgroundImage:
        "linear-gradient( var(--stripes-angle), var(--stripes-color) 5%,transparent 5% 45%, var(--stripes-color) 45% 55%, transparent 55% 95%, var(--stripes-color) 95% )",
      backgroundSize: "var(--stripes-size) var(--stripes-size)",
      animation: "slide 1s infinite linear",
    },
  });

  // hsla(var(--stripes-hsla) var(--stripes-opacity)

  addUtilities({
    ".stripes-white": { "--stripes-hsla": "0, 0%, 100%" },
    ".stripes-reverse": { "--stripes-angle": "45deg" },
  });

  matchUtilities(
    {
      "stripes-opacity": (value) => ({ "--stripes-opacity": value }),
    },
    { values: theme("opacity") }
  );

  matchUtilities(
    { "stripes-size": (value) => ({ "--stripes-size": value }) },
    {
      values: {
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
      },
    }
  );

  matchUtilities({
    "stripes-color": (value) => ({ "--stripes-hsla": value }),
  });
});

module.exports = stripes;
