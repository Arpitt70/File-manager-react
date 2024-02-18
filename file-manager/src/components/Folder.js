import React, { useState } from "react";

const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });

  const handleNewEvent = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({ isVisible: true, isFolder });
    setExpand(true);
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  return explorer.isFolder ? (
    <div style={{ marginTop: 5 }}>
      <div className="folder" onClick={() => setExpand(!expand)}>
        📂{explorer.name}
        <div>
          <button onClick={(e) => handleNewEvent(e, true)}>Folder +</button>
          <button onClick={(e) => handleNewEvent(e, false)}>File +</button>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}>
        {showInput.isVisible && (
          <div className="inputContainer">
            <span> {showInput.isFolder ? "📂" : "📃"} </span>
            <input
              type="text"
              onKeyDown={(e) => onAddFolder(e)}
              onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              autoFocus
              className="inputContainer__input"
            />
          </div>
        )}
        {explorer.items.map((exp) => (
          <Folder
            explorer={exp}
            handleInsertNode={handleInsertNode}
            key={exp.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <span className="file">📃{explorer.name}</span>
  );
};

export default Folder;
