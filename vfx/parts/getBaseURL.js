export function getBaseURL() {
  let baseURL = `http://localhost:1337`;

  if (process.env.NODE_ENV !== "development") {
    baseURL = "https://backend-onrender.effectnode.com";
  }

  return baseURL;
}
