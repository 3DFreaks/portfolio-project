import { FC, ReactElement, useState } from "react";
import { StartButton } from "./StartButton";
import { Canvas3D } from "./Canvas3D";
import { Footer } from "./Footer";

export const MainComponent : FC = (): JSX.Element => {
  const startButtonShown : boolean = true

  const [canvasVisibility, setCanvasVisibility] = useState(!startButtonShown);
  const [buttonVisibility, setButtonVisibility] = useState(startButtonShown);

  let component = <main className="absolute table w-full h-full">
  { buttonVisibility ? ReturnStartButton(): null}
  { canvasVisibility ? <Canvas3D/>: null }
  <Footer></Footer>
  </main>
  return component;

  function ReturnStartButton() : ReactElement {
    return (<StartButton onClick={()=>{ setCanvasVisibility(true); setButtonVisibility(false)} }/>)
  }
}