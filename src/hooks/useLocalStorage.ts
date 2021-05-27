import { useState } from 'react'

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (s: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (arg: T) => {
    try {
      const valueToStore = arg instanceof Function ? arg(storedValue) : arg

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
