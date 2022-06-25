import { render, screen } from '@testing-library/react'

import MainHeader from '.'

describe('<MainHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<MainHeader />)

    expect(screen.getByRole('heading', { name: /MainHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
