"use client"

import { useState } from "react"

export default function Button({ children, colour, onClick }: { children: React.ReactNode, colour: string, onClick: Function }) {
  const [disabled, setDisabled] = useState(false)
  const onClickWrapper = async () => {
    setDisabled(true)
    await onClick()
    setDisabled(false)
  }
  return (
    <button
      style={{ backgroundColor: colour }}
      className={`inline-block rounded-full px-16 py-4 cursor-pointer`}
      onClick={() => onClickWrapper()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}