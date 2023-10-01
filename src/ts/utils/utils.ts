export function randomElement<T>(arr: Array<T>): T | undefined {
	return arr[Math.floor(Math.random() * arr.length)]
}

export function assertEmpty<T>(variable: T | null | undefined): T {
	if (!variable) {
		console.groupCollapsed('assertEmpty')
		console.trace()
		console.groupEnd()
		throw 'Assertion failed'
	}
	return variable
}

export function assertBoolean(value: boolean, message: string = 'Assertion failed') {
	if (!value) {
		console.groupCollapsed('assertBoolean')
		console.trace()
		console.groupEnd()
		throw message
	}
}

export function assertNonZero(variable: number, message: string = 'Assertion failed'): number {
	if (variable === 0) {
		console.groupCollapsed('assertNonZero')
		console.trace()
		console.groupEnd()
		throw message
	}
	return variable
}

export async function pause(time: number = 0) {
	return await new Promise((resolve) => setTimeout(resolve, time))
}
