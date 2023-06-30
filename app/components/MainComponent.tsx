import { FC, ReactElement, useState } from "react";
import { StartButton } from "./StartButton";
import { Canvas3D } from "./Canvas3D";

export const MainComponent : FC = (): JSX.Element => {
  const startButtonShown : boolean = false

  const [canvasVisibility, setCanvasVisibility] = useState(!startButtonShown);
  const [buttonVisibility, setButtonVisibility] = useState(startButtonShown);

  let component = <main className="absolute table w-full h-full">
  { buttonVisibility ? ReturnStartButton(): null}
  { canvasVisibility ? <Canvas3D/>: null }
  </main>
  return component;

  function ReturnStartButton() : ReactElement {
    return (<div className="table-cell align-middle	text-center">
            <StartButton onClick={()=>{ setCanvasVisibility(true); setButtonVisibility(false)} }/>
          </div>)
  }
}