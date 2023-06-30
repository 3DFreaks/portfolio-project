import { Button, ButtonProps } from "@material-tailwind/react";
import { FC } from "react";
import { IButtonProps } from "../types";

export const StartButton : FC<IButtonProps> = (props): JSX.Element => {
  let clicked : boolean = false
  return <Button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onMouseDown={()=>{clicked = true}}
          onMouseUpCapture={()=>
            { 
              if(clicked) { props.onClick(); }
              clicked = false
            }
          }>Let&apos;s Go!</Button>;
}