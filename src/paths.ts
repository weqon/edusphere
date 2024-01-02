export const paths = {
  index: "/",
  checkout: "/checkout",
  contact: "/contact",
  pricing: "/pricing",
  auth: {
    auth0: {
      callback: "/auth/auth0/callback",
      login: "/auth/auth0/login",
    },
    jwt: {
      login: "/auth/jwt/login",
      register: "/auth/jwt/register",
    },
    firebase: {
      login: "/auth/firebase/login",
      register: "/auth/firebase/register",
    },
    amplify: {
      confirmRegister: "/auth/amplify/confirm-register",
      forgotPassword: "/auth/amplify/forgot-password",
      login: "/auth/amplify/login",
      register: "/auth/amplify/register",
      resetPassword: "/auth/amplify/reset-password",
    },
  },
  authDemo: {
    forgotPassword: {
      classic: "/auth-demo/forgot-password/classic",
      modern: "/auth-demo/forgot-password/modern",
    },
    login: {
      classic: "/auth-demo/login/classic",
      modern: "/auth-demo/login/modern",
    },
    register: {
      classic: "/auth-demo/register/classic",
      modern: "/auth-demo/register/modern",
    },
    resetPassword: {
      classic: "/auth-demo/reset-password/classic",
      modern: "/auth-demo/reset-password/modern",
    },
    verifyCode: {
      classic: "/auth-demo/verify-code/classic",
      modern: "/auth-demo/verify-code/modern",
    },
  },
  dashboard: {
    index: "/edusphere",
    academy: {
      index: "/edusphere/academy",
      courseDetails: "/edusphere/academy/courses/:courseId",
    },
    account: "/edusphere/account",
    analytics: "/edusphere/analytics",
    blank: "/edusphere/blank",
    calendar: "/edusphere/calendar",
    chat: "/edusphere/chat",

    mail: "/edusphere/mail",

    social: {
      index: "/edusphere/social",
      profile: "/edusphere/social/profile",
      feed: "/edusphere/social/feed",
    },
  },

  docs: "https://material-kit-pro-react-docs.devias.io",
  notAuthorized: "/401",
  notFound: "/404",
  serverError: "/500",
};
