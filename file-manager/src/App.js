import { useState } from "react";
import explorer from "./components/Constant/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./Hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
      <b>File Manager 💻</b>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </>
  );
}

export default App;
