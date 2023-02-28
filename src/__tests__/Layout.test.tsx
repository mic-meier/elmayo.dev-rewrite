import Layout from '@/components/Layout'
import {MENU_LINKS, SITE_NAME} from '@/lib/constants'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

describe('Layout', () => {
  it('renders the navigation', () => {
    render(<Layout title={SITE_NAME}>{null}</Layout>)

    const heading = screen.getByRole('link', {
      name: SITE_NAME,
    })

    expect(heading).toBeInTheDocument()
  })
})
