import Link from 'next/link'

export default () => (
    <div>
      <span>This is Next.js speaking</span>
      <p>
        <Link href="/about">
        <a>About</a>
        </Link>
      </p>
    </div>
)