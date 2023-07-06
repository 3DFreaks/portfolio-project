import { Button, ButtonProps } from "@material-tailwind/react";
import { FC } from "react";
import { IButtonProps } from "../types";

export const StartButton : FC<IButtonProps> = (props): JSX.Element => {
  let clicked : boolean = false
  let buttonClass= `absolute 
                    top-1/2 
                    left-1/2 
                    bg-blue-500 
                    hover:bg-blue-700 
                    text-white 
                    font-bold 
                    py-2 
                    px-4 
                    rounded 
                    w-32 
                    h-10 
                    -translate-y-5
                    -translate-x-16
                    `
  return <Button 
          className={buttonClass}
          onMouseDown={()=>{clicked = true}}
          onMouseUpCapture={()=>
            { 
              if(clicked) { props.onClick(); }
              clicked = false
            }
          }>Let&apos;s Go!</Button>;
}