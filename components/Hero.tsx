export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className={`absolute w-[100%] h-[65vh] tablet:h-[85vh] ml-0 top-0 left-0`}>
      {children}
    </div>
  )
}