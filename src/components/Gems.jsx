import React from "react";
import Gem from './Gem';

const Gems = (props) => {
  const { gems, addToSaved, removeFromSaved } = props;

  return (
    <ul className="gems">
      {gems.map(gem => (
        <li key={gem.name}>
          <Gem gem={gem} addToSaved={addToSaved} removeFromSaved={removeFromSaved} />
        </li>
      ))}
    </ul>
  );
};

export default Gems;