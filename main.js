/** Connect to Moralis server */
const serverUrl = "https://xxxxx.yourserver.com:2053/server";
const appId = "YOUR_APP_ID";

Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }

  showLoginControls()
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  showLoginControls()
}

document.getElementById("login_button").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

function showLoginControls(){
    let user = Moralis.User.current();
    if (user){
        document.getElementById("login_button").style.display="none";
        document.getElementById("btn-logout").style.display="block";
    }
    else{
        document.getElementById("login_button").style.display="block";
        document.getElementById("btn-logout").style.display="none";
    }
}

showLoginControls();

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/