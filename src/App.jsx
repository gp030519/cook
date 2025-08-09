

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BananaPancakes from './recipes/BananaPancakes';
import YogurtParfait from './recipes/YogurtParfait';
import ScrambledEggsWrap from './recipes/ScrambledEggsWrap';
import GrilledCheeseSandwich from './recipes/GrilledCheeseSandwich';
import VeggieQuesadilla from './recipes/VeggieQuesadilla';
import ChickenSaladPita from './recipes/ChickenSaladPita';
import SpaghettiTomatoSauce from './recipes/SpaghettiTomatoSauce';
import EasyStirFry from './recipes/EasyStirFry';
import CheesyBakedPotatoes from './recipes/CheesyBakedPotatoes';
import FruitKabobs from './recipes/FruitKabobs';
import TrailMix from './recipes/TrailMix';
import AppleNachos from './recipes/AppleNachos';
import NoBakeChocolateCookies from './recipes/NoBakeChocolateCookies';
import RainbowVeggieWraps from './recipes/RainbowVeggieWraps';

function App() {
  return (
    <div className="abbie-container">
      <header className="abbie-header">
        <h1>Cook with Abbie and Ella</h1>
        <p className="abbie-subtitle">Fun recipes for 10-14 year olds!</p>
      </header>
      <main>
        <Routes>
          <Route
            path="/cook/"
            element={
              <>
                <section className="abbie-intro">
                  <h2>Welcome!</h2>
                  <p>
                    Discover easy, delicious, and fun recipes you can make at home. Whether you're just starting out or already a kitchen pro, there's something here for everyone!
                  </p>
                </section>
                <section className="abbie-recipes">
                  <h2>Featured Recipes</h2>
                  <ul className="recipe-list">
                    <li className="recipe-card"><Link to="/banana-pancakes">Banana Pancakes</Link></li>
                    <li className="recipe-card"><Link to="/yogurt-parfait">Yogurt Parfait</Link></li>
                    <li className="recipe-card"><Link to="/scrambled-eggs-wrap">Scrambled Eggs Wrap</Link></li>
                    <li className="recipe-card"><Link to="/grilled-cheese-sandwich">Grilled Cheese Sandwich</Link></li>
                    <li className="recipe-card"><Link to="/veggie-quesadilla">Veggie Quesadilla</Link></li>
                    <li className="recipe-card"><Link to="/chicken-salad-pita">Chicken Salad Pita</Link></li>
                    <li className="recipe-card"><Link to="/spaghetti-tomato-sauce">Spaghetti with Tomato Sauce</Link></li>
                    <li className="recipe-card"><Link to="/easy-stir-fry">Easy Stir-Fry</Link></li>
                    <li className="recipe-card"><Link to="/cheesy-baked-potatoes">Cheesy Baked Potatoes</Link></li>
                    <li className="recipe-card"><Link to="/fruit-kabobs">Fruit Kabobs</Link></li>
                    <li className="recipe-card"><Link to="/trail-mix">Trail Mix</Link></li>
                    <li className="recipe-card"><Link to="/apple-nachos">Apple Nachos</Link></li>
                    <li className="recipe-card"><Link to="/no-bake-chocolate-cookies">No-Bake Chocolate Cookies</Link></li>
                    <li className="recipe-card"><Link to="/rainbow-veggie-wraps">Rainbow Veggie Wraps</Link></li>
                  </ul>
                </section>
              </>
            }
          />
          <Route path="/banana-pancakes" element={<BananaPancakes />} />
          <Route path="/yogurt-parfait" element={<YogurtParfait />} />
          <Route path="/scrambled-eggs-wrap" element={<ScrambledEggsWrap />} />
          <Route path="/grilled-cheese-sandwich" element={<GrilledCheeseSandwich />} />
          <Route path="/veggie-quesadilla" element={<VeggieQuesadilla />} />
          <Route path="/chicken-salad-pita" element={<ChickenSaladPita />} />
          <Route path="/spaghetti-tomato-sauce" element={<SpaghettiTomatoSauce />} />
          <Route path="/easy-stir-fry" element={<EasyStirFry />} />
          <Route path="/cheesy-baked-potatoes" element={<CheesyBakedPotatoes />} />
          <Route path="/fruit-kabobs" element={<FruitKabobs />} />
          <Route path="/trail-mix" element={<TrailMix />} />
          <Route path="/apple-nachos" element={<AppleNachos />} />
          <Route path="/no-bake-chocolate-cookies" element={<NoBakeChocolateCookies />} />
          <Route path="/rainbow-veggie-wraps" element={<RainbowVeggieWraps />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
