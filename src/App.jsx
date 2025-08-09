

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
                    <li className="recipe-card"><Link to="/cook/banana-pancakes">Banana Pancakes</Link></li>
                    <li className="recipe-card"><Link to="/cook/yogurt-parfait">Yogurt Parfait</Link></li>
                    <li className="recipe-card"><Link to="/cook/scrambled-eggs-wrap">Scrambled Eggs Wrap</Link></li>
                    <li className="recipe-card"><Link to="/cook/grilled-cheese-sandwich">Grilled Cheese Sandwich</Link></li>
                    <li className="recipe-card"><Link to="/cook/veggie-quesadilla">Veggie Quesadilla</Link></li>
                    <li className="recipe-card"><Link to="/cook/chicken-salad-pita">Chicken Salad Pita</Link></li>
                    <li className="recipe-card"><Link to="/cook/spaghetti-tomato-sauce">Spaghetti with Tomato Sauce</Link></li>
                    <li className="recipe-card"><Link to="/cook/easy-stir-fry">Easy Stir-Fry</Link></li>
                    <li className="recipe-card"><Link to="/cook/cheesy-baked-potatoes">Cheesy Baked Potatoes</Link></li>
                    <li className="recipe-card"><Link to="/cook/fruit-kabobs">Fruit Kabobs</Link></li>
                    <li className="recipe-card"><Link to="/cook/trail-mix">Trail Mix</Link></li>
                    <li className="recipe-card"><Link to="/cook/apple-nachos">Apple Nachos</Link></li>
                    <li className="recipe-card"><Link to="/cook/no-bake-chocolate-cookies">No-Bake Chocolate Cookies</Link></li>
                    <li className="recipe-card"><Link to="/cook/rainbow-veggie-wraps">Rainbow Veggie Wraps</Link></li>
                  </ul>
                </section>
              </>
            }
          />
          <Route
            path="/"
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
                    <li className="recipe-card"><Link to="/cook/banana-pancakes">Banana Pancakes</Link></li>
                    <li className="recipe-card"><Link to="/cook/yogurt-parfait">Yogurt Parfait</Link></li>
                    <li className="recipe-card"><Link to="/cook/scrambled-eggs-wrap">Scrambled Eggs Wrap</Link></li>
                    <li className="recipe-card"><Link to="/cook/grilled-cheese-sandwich">Grilled Cheese Sandwich</Link></li>
                    <li className="recipe-card"><Link to="/cook/veggie-quesadilla">Veggie Quesadilla</Link></li>
                    <li className="recipe-card"><Link to="/cook/chicken-salad-pita">Chicken Salad Pita</Link></li>
                    <li className="recipe-card"><Link to="/cook/spaghetti-tomato-sauce">Spaghetti with Tomato Sauce</Link></li>
                    <li className="recipe-card"><Link to="/cook/easy-stir-fry">Easy Stir-Fry</Link></li>
                    <li className="recipe-card"><Link to="/cook/cheesy-baked-potatoes">Cheesy Baked Potatoes</Link></li>
                    <li className="recipe-card"><Link to="/cook/fruit-kabobs">Fruit Kabobs</Link></li>
                    <li className="recipe-card"><Link to="/cook/trail-mix">Trail Mix</Link></li>
                    <li className="recipe-card"><Link to="/cook/apple-nachos">Apple Nachos</Link></li>
                    <li className="recipe-card"><Link to="/cook/no-bake-chocolate-cookies">No-Bake Chocolate Cookies</Link></li>
                    <li className="recipe-card"><Link to="/cook/rainbow-veggie-wraps">Rainbow Veggie Wraps</Link></li>
                  </ul>
                </section>
              </>
            }
          />
          <Route path="/cook/banana-pancakes" element={<BananaPancakes />} />
          <Route path="/cook/yogurt-parfait" element={<YogurtParfait />} />
          <Route path="/cook/scrambled-eggs-wrap" element={<ScrambledEggsWrap />} />
          <Route path="/cook/grilled-cheese-sandwich" element={<GrilledCheeseSandwich />} />
          <Route path="/cook/veggie-quesadilla" element={<VeggieQuesadilla />} />
          <Route path="/cook/chicken-salad-pita" element={<ChickenSaladPita />} />
          <Route path="/cook/spaghetti-tomato-sauce" element={<SpaghettiTomatoSauce />} />
          <Route path="/cook/easy-stir-fry" element={<EasyStirFry />} />
          <Route path="/cook/cheesy-baked-potatoes" element={<CheesyBakedPotatoes />} />
          <Route path="/cook/fruit-kabobs" element={<FruitKabobs />} />
          <Route path="/cook/trail-mix" element={<TrailMix />} />
          <Route path="/cook/apple-nachos" element={<AppleNachos />} />
          <Route path="/cook/no-bake-chocolate-cookies" element={<NoBakeChocolateCookies />} />
          <Route path="/cook/rainbow-veggie-wraps" element={<RainbowVeggieWraps />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
