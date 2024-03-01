import myFetchFunc from "./utils/fetchImages";
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Centre } from "./components/centre/centre";
import { CentreLogged } from "./components/centre/centerLogged/CenterLogged";
import { Footer } from "./components/footer/Footer";
import { NavbarLogged } from "./components/nanbarLogged/NavbarLogged";
import { getTokenFromCookie } from "./common";
import "./App.css";
import { authCheck } from "./utils/fetch";

function App() {
  //

  const [user, setUser] = useState({});
  const [isLogged, setIslogged] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({});
      } else {
        logInWithToken(token, setUser);
      }
    }
  }, []);

  const logInWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    console.log("persistantUser: ", persistantUser);
    await setUser(persistantUser.user);
  };

  //
  const logOut = () => {
    setUser({});
    document.cookie =
      "jwt_token=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <>
      {!user.username ? (
        <div className="body-Wrapper">
          <Navbar setUser={setUser} />
          <Centre />
          <Footer />
        </div>
      ) : (
        <div className="body-Wrapper">
          <NavbarLogged email={user.email} logOut={logOut} />
          <Centre user={user} />
          <Footer user={user} />
        </div>
      )}
    </>
  );
}

export default App;
