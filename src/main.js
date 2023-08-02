import Cookies from "js-cookie";
import { queryParamsIntoCookies } from "./queryCheck.js";
import { beginSpotifyPolling, stopPollingAndSignOut } from "./spotifyQuery.js";

console.log("starting main.js");

queryParamsIntoCookies();

const accessToken = Cookies.get("accessToken");

const signIn = document.querySelector(".sign-in");
const spotifyLogoContainer = document.querySelector(".spotifyLogoContainer");
const signOut = document.getElementById("sign-out");


// if (navigator.serviceWorker) {
//   console.log("supports service workers!");
// }
// TODO: display video poster until video has been saved locally--> Then start the loop

// check if they're signed in
if (accessToken) {
  console.log(`signed in with accessToken: ${accessToken}`);

  if (signIn) {
    signIn.style.display = "none";
    // console.log("sign-in removed!");
  }

  if (spotifyLogoContainer) {
    spotifyLogoContainer.style.display = "flex";
  }

  if (signOut) {
    signOut.addEventListener("click", () => {
      console.log("signout clicked");
      stopPollingAndSignOut();
      // clearCookiesAndResetPath();
    });
  }

  beginSpotifyPolling();
} else {
  console.log("no accessToken found");

  if (signIn) {
    signIn.style.display = "block";
  }
  if (spotifyLogoContainer) {
    spotifyLogoContainer.style.display = "none";
  }
}
console.log("exiting main.js");