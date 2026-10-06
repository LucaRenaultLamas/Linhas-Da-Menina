type Props = { src?: string; alt: string; className?: string }

export default function ImagemProduto({ src, alt, className = '' }: Props) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`object-cover w-full h-full ${className}`} />
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#2A0A0D_0%,#0B0506_80%)] ${className}`}
    >
      <span className="text-sangue/60 text-2xl">◆</span>
    </div>
  )
}