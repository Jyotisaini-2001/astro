/** @format */

import { NavbarComponent } from "./components/NavbarComponent";
import { CardComponent } from "./components/CardComponent";
import { Data } from "./components/Data";

function App() {
  return (
    <>
      <NavbarComponent />
      <div id="astrologer" className="px-2 md:px-10 pb-8 xl:container xl:mx-auto">
        <h1 className="text-2xl md:text-4xl text-center leading-10 my-8 font-poppins">
          Chat with Astrologers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {Data.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
