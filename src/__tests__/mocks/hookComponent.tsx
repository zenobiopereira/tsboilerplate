import React, { VFC } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const HookComponent: VFC<{ str?: string }> = (prop) => {
  const [value, setValue] = useLocalStorage('key', 'value')

  return (
    <div data-testid="outside-div">
      <input
        title="input"
        id="input"
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        data-testid="button-input"
        title="button"
        id="button"
        onClick={() => setValue(prop.str ?? 'N/A')}
      >
        Set prop as key.
      </button>
    </div>
  )
}

export default HookComponent
