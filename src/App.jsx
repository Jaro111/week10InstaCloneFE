import myFetchFunc from "./utils/fetchImages";
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Centre } from "./components/centre/centre";
import { Footer } from "./components/footer/Footer";
import { NavbarLogged } from "./components/nanbarLogged/NavbarLogged";
import "./App.css";
import { count } from "mathjs";

function App() {
  //
  const [user, setUser] = useState({});
  const [randomPhotos, setRandomPhotos] = useState([]);

  //
  const randomFunc = async () => {
    const photos = await myFetchFunc();
    const newArray = [...photos];
    setRandomPhotos(newArray);
    console.log(newArray[0].imageURLs.small);
    console.log(randomPhotos);
  };

  useEffect(() => {
    randomFunc();
  }, []);

  return (
    <>
      {!user.username ? (
        <div className="body-Wrapper">
          <Navbar setUser={setUser} />
          <Centre photos={randomPhotos} />
          <Footer />
        </div>
      ) : (
        <div className="body-Wrapper">
          <NavbarLogged user={user.username} />
          <Centre />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
