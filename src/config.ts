import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";

export function initSuperTokensUI() {
  (window as any).supertokensUIInit("supertokensui", {
    appInfo: {
      websiteDomain: "http://localhost:3000",
      apiDomain: "http://localhost:8888",
      websiteBasePath: "/auth",
      appName: "SuperTokens Demo App",
    },
    recipeList: [
      (window as any).supertokensUIPasswordless.init({
        contactMethod: "EMAIL_OR_PHONE",
      }),
      (window as any).supertokensUISession.init(),
    ],
  });
}

export function initSuperTokensWebJS() {
  SuperTokens.init({
    appInfo: {
      appName: "SuperTokens Demo App",
      apiDomain: "http://localhost:8888",
    },
    recipeList: [Session.init()],
  });
}
