import { render, screen } from '@testing-library/react'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the aside', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Layout children={undefined} />)

    expect(screen.getByText('Aside')).toBeInTheDocument()
  })
  it('should render the content', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Layout children={undefined} />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
  it('should render the main header', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Layout children={undefined} />)

    expect(screen.getByText('MainHeader')).toBeInTheDocument()
  })
})
