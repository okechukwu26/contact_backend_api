import mediaRoutes from "./media/router";

import authRoute from "./auth/router";
import ContactRoute from "./contacts/router";

export = {
  media: {
    routes: mediaRoutes,
  },

  auth: {
    routes: authRoute,
  },
  contact: {
    routes: ContactRoute,
  },
};
