import { FC } from "react";

export const Footer : FC = (): JSX.Element => {
  return <div className='absolute bottom-2 w-full'>
    <div className='text-center opacity-20 select-none'>Created by <a href='https://github.com/3DFreaks' className='underline' target="_blank">3DFreaks</a>. Shared on MIT License.</div>
  </div>
}