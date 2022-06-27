import { render, screen } from '@testing-library/react'

import Content from '.'

describe('<Content />', () => {
  it('should render the content', () => {
    render(<Content>Content</Content>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
