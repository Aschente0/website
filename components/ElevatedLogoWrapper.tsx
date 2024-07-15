export default function ElevatedLogoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative drop-shadow-lg brightness-150 saturate-200 w-full h-full">
      {children}
    </div>
  )
}