import { useState } from "react";
import ComponentOne from "../../Components/Artificial/Hero";
import ComponentTwo from "../../Components/Artificial/Secondj";

export default function App() {
  const [movePara, setMovePara] = useState(false);

  return (
    <div>
      <ComponentTwo setMovePara={setMovePara} movePara={movePara} />
      <ComponentOne />
    </div>
);}