export default function Divisor({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-linear-to-r from-transparent to-ouro/60" />
      <span className="text-sangue text-xs">◆</span>
      <span className="h-px w-16 bg-linear-to-l from-transparent to-ouro/60" />
    </div>
  )
}