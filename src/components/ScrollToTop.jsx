import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Komponenten gör så man automatiskt scrollas till toppen av vyn man är på. Källa: https://medium.com/@aptia.rahgozar/implementing-a-scroll-to-top-feature-with-react-d6994913c597

function ScrollToTop() {
  const { pathname } = useLocation(); //berättar att det gäller den aktuella vy man befinner sig på

  useEffect(() => {
    window.scrollTo(0, 0); //metoden talar om att startpositionen ska var på 0 horisontellt och vertikalt, dvs högst upp på sidan
  }, [pathname]);

  return null;
}

export default ScrollToTop;
