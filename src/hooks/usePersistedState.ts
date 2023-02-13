import {useState, useEffect} from "react"

/**
 * Description: Hook used to save a common state value to localStorage.
 *
 * @hook
 * @example
 *
 * const [themeName, setThemeName] = usePersistedState(THEME, 'ecosis')
 */
export function usePersistedState<T = unknown>(
    key: string,
    initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            const parsed = JSON.parse(storageValue)

            return parsed
        }

        return initialState
    })

    useEffect(() => {
        const store = () => {
            localStorage.setItem(key, JSON.stringify(state))
        }

        store()
    }, [key, state])

    return [state, setState]
}
