import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input', () => {
  it('should render', () => {
    render(<Input />)
  })

  it('should display the placeholder', () => {
    render(<Input placeholder="type here" />)
    const placeholder = screen.getByPlaceholderText('type here')
    expect(placeholder).toBeInTheDocument()
  })
})
