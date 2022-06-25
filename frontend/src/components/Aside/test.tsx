import { render, screen } from '@testing-library/react'

import Aside from '.'

describe('<Aside />', () => {
  it('should render the heading', () => {
    const { container } = render(<Aside />)

    expect(screen.getByRole('heading', { name: /Aside/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
