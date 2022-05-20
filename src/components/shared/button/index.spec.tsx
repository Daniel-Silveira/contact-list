import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('should render', () => {
    render(<Button />)
  })

  it('should display the correct text', () => {
    render(<Button text="click me" />)
    const btn = screen.getByText('click me')
    expect(btn).toBeInTheDocument()
  })

  it('should call the correct function', () => {
    const fn = jest.fn()
    render(<Button text="click me" onClick={fn} />)

    const btn = screen.getByText('click me')

    fireEvent.click(btn)

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
