import "../src/index.css";

// Configures Stroybook to log the actions (onArchiveTask and on PinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
