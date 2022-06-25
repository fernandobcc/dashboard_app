import { render, screen } from '@testing-library/react'

import Content from '.'

describe('<Content />', () => {
  it('should render the heading', () => {
    const { container } = render(<Content />)

    expect(screen.getByRole('heading', { name: /Content/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
