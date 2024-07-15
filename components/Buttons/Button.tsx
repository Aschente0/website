export default function Button({ children, colour }: { children: React.ReactNode, colour: string }) {
  return (
    <div
      style={{ backgroundColor: colour }}
      className={`inline-block rounded-full px-16 py-4 cursor-pointer`}
    >
      {children}
    </div>
  )
}