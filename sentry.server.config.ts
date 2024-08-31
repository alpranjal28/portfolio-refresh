// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://299fb67915b18849a69c0204050df510@o4507668492648448.ingest.de.sentry.io/4507870418370640",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
