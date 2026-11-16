import { cx } from '../lib/cx'
import { brand } from '../content'

const WORDMARK = '/aiden-wordmark.png'
const ICON = '/aiden-icon.png'

/** The supplied Aiden icon, used as an image and never redrawn. */
export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <img
      src={ICON}
      alt=""
      aria-hidden
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={cx('shrink-0 object-contain', className)}
    />
  )
}

/** The supplied wordmark, kept as an image so the lettering stays exact. */
export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label={brand.name} className={cx('inline-flex items-center gap-2.5', className)}>
      <LogoMark size={26} />
      <img src={WORDMARK} alt={brand.name} style={{ height: 20 }} className="w-auto max-w-[112px] object-contain" />
    </a>
  )
}
