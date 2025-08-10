import React from 'react';

export default function FrenchToast() {
  return (
    <div className="recipe-detail" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start'}}>
      <img src="/cook/french_toast.jpg" alt="French Toast" style={{width: '100%', maxWidth: '400px', borderRadius: '16px', flex: '0 0 400px'}} />
      <div style={{flex: '1 1 300px', minWidth: '250px'}}>
        <h2>French Toast</h2>
        <p>Classic French toast—crispy outside, soft inside, and delicious for breakfast!</p>
        <h3>Ingredients</h3>
        <ul>
          <li>2 slices bread</li>
          <li>1 egg</li>
          <li>1/4 cup milk</li>
          <li>1/2 tsp cinnamon</li>
          <li>1 tsp sugar (optional)</li>
          <li>Butter for frying</li>
          <li>Maple syrup or fruit to serve</li>
        </ul>
        <h3>Instructions</h3>
        <ol>
          <li>Whisk egg, milk, cinnamon, and sugar in a shallow bowl.</li>
          <li>Dip bread slices in the mixture, coating both sides.</li>
          <li>Heat butter in a pan over medium heat.</li>
          <li>Cook bread until golden brown on both sides.</li>
          <li>Serve warm with syrup or fruit!</li>
        </ol>
      </div>
    </div>
  );
}
