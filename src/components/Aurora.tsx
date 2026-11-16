import { cx } from '../lib/cx'

// Slow-moving colour fields behind the hero and the closing call to action.
// Pure CSS; each blob is a blurred radial gradient on its own animation.
export function Aurora({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cx('pointer-events-none absolute inset-0 overflow-hidden', className)} style={{ opacity: intensity }}>
      <div className="round absolute left-1/2 top-[-20%] h-[70%] w-[90%] -translate-x-1/2 animate-aurora-a rounded-full bg-[radial-gradient(closest-side,rgb(248_8_1/0.42),transparent)] blur-3xl" />
      <div className="round absolute left-[10%] top-[0%] h-[60%] w-[55%] animate-aurora-b rounded-full bg-[radial-gradient(closest-side,rgb(255_b3_a6/0.3),transparent)] blur-3xl" />
      <div className="round absolute right-[5%] top-[10%] h-[55%] w-[50%] animate-aurora-c rounded-full bg-[radial-gradient(closest-side,rgb(255_6a_5a/0.28),transparent)] blur-3xl" />
    </div>
  )
}
