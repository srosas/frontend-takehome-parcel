import React from "react";
import '../styles/Gem.css';

const Gem = (props) => {
  const { gem, addToSaved, removeFromSaved } = props;

  return (
    <div className="gem-container">
      <div className="gem">
        <div className="gem-left">
          <h2 className="gem-name">{gem.name}</h2>
          <h4 className="gem-version">{gem.version}</h4>
        </div>
        <div className="gem-buttons">
          <button className="gem-save" onClick={() => addToSaved(gem)}>Save</button>
          <button className="gem-back" onClick={() => removeFromSaved(gem)}>Unsave</button>
        </div>
      </div>
      <h4 className="gem-info">{gem.info}</h4>
    </div>
  );
};

export default Gem;