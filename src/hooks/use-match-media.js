import { useCallback, useLayoutEffect, useMemo, useState } from 'react'

const queries = {
	isDesktop: '(min-width: 992px) and (max-width: 1400px)'
}

const useMatchMedia = () => {
	const mediaQueryLists = useMemo(() => Object.values(queries).map((query) => matchMedia(query)), [])
	const getValues = useCallback(() => mediaQueryLists.map((mql) => mql.matches), [])
	const [values, setValues] = useState(getValues)

	useLayoutEffect(() => {
		const handler = () => setValues(getValues)
		mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))

		return () => {
			mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler))
		}
	}, [])

	return Object.keys(queries).reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index]
		}),
		{}
	)
}

export default useMatchMedia
