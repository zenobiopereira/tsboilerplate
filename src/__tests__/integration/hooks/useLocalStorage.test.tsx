import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import HookComponent from '../../mocks/hookComponent'

describe('Hook: useLocalStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    })
  })

  it('Should call localStorage getItem on render', () => {
    const { getItem } = window.localStorage
    render(<HookComponent />)

    expect(getItem).toHaveBeenCalledTimes(1)
    expect(getItem).toHaveBeenCalledWith('key')
  })

  it('Should call setItem on changed value.', () => {
    const { setItem } = window.localStorage
    const { getByRole } = render(<HookComponent />)

    const input = getByRole('textbox')

    fireEvent.change(input, { target: { value: 'testing' } })

    expect(setItem).toHaveBeenCalledTimes(1)
    expect(setItem).toHaveBeenCalledWith('key', '"testing"')
  })

  it('Should call setItem on click on button click', () => {
    const { getByDisplayValue, getByRole } = render(
      <HookComponent str="TEST" />,
    )
    const { setItem } = window.localStorage

    const button = getByRole('button')
    fireEvent.click(button)

    getByDisplayValue('TEST')

    expect(setItem).toHaveBeenCalledTimes(1)
    expect(setItem).toHaveBeenCalledWith('key', '"TEST"')
  })
})
