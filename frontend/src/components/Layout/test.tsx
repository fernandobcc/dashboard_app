import { render, screen } from '@testing-library/react'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the aside', () => {
    render(<Layout />)

    expect(screen.getByText('Aside')).toBeInTheDocument()
  })
  it('should render the content', () => {
    render(<Layout />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
  it('should render the main header', () => {
    render(<Layout />)

    expect(screen.getByText('MainHeader')).toBeInTheDocument()
  })
})
