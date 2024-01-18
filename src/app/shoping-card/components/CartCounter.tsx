'use client'

import { useState } from 'react';

interface Props {
    value?: number;
}

export const CartCounter = ({ value=10 }: Props) => {
    const [contador, setContador] = useState(value);
  return (
    <>
    <span className="text-9xl font-bold">{contador}</span>
    <div className="flex">
        <button
        onClick={() => setContador(contador + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[100px]
        "
        >
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[100px]"
         onClick={() => setContador(contador -1)}>
          -1
        </button>
      </div>
    </>
  )
}
