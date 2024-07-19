import "./App.css";

import Hero from "./assets/Component/Hero/Hero";
import Card from "./assets/Component/Card/Card";
import Guide from "./assets/Component/Guide/Guide";
const App = () => {
  return (
    <>
      <div className="flex flex-col ">
        
        <Hero />
        <Card />
        <Guide/>
        
        
      </div>
    </>
  );
};

export default App;
