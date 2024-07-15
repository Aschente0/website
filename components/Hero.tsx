export const HERO_ELEMENT_HEIGHTS = {
  mobile: "65vh",
  desktop: "85vh"
}
export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className={`absolute w-[100%] h-[${HERO_ELEMENT_HEIGHTS.mobile}] tablet:h-[${HERO_ELEMENT_HEIGHTS.desktop}] ml-0 top-0 left-0`}>
      {children}
    </div>
  )
}