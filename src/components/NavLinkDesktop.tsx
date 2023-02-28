import Link from 'next/link'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <div className="px-5 py-2">
      <Link
        href={href}
        data-test-id={`${href}-desktop`}
        className="hover:text-purple-700"
      >
        {children}
      </Link>
    </div>
  )
}
