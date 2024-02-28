import myFetchFunc from "./utils/fetchImages";
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Centre } from "./components/centre/centre";
import { CentreLogged } from "./components/centre/centerLogged/CenterLogged";
import { Footer } from "./components/footer/Footer";
import { NavbarLogged } from "./components/nanbarLogged/NavbarLogged";
import "./App.css";
import { count } from "mathjs";

function App() {
  //
  const [user, setUser] = useState({});

  //
  const logOut = () => {
    setUser({});
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
          <NavbarLogged
            user={user.username}
            email={user.email}
            logOut={logOut}
          />
          <CentreLogged />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
