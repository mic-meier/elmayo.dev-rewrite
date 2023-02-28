import Link from 'next/link'
import {forwardRef} from 'react'

const NavLinkMobile = forwardRef(
  (props: {href: string; children: React.ReactNode}, ref) => {
    const {href, children, ...rest} = props

    return (
      <Link
        href={href}
        data-test-id={`${href}-mobile`}
        className="underlined px-5vw block list-none whitespace-nowrap border-b border-purple-200 bg-white py-9 text-center text-lg font-medium"
        {...rest}
      >
        {children}
      </Link>
    )
  },
)

NavLinkMobile.displayName = 'NavLinkMobile'

export default NavLinkMobile
