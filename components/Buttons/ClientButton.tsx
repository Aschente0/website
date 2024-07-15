"use client"

export default function Button({ children, colour, onClick }: { children: React.ReactNode, colour: string, onClick: Function }) {
  return (
    <div
      style={{ backgroundColor: colour }}
      className={`inline-block rounded-full px-16 py-4 cursor-pointer`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  )
}