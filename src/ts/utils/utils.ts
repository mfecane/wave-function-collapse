export function randomElement<T>(arr: Array<T>) {
	return arr[Math.floor(Math.random() * arr.length)]
}

export function assertEmpty<T>(variable: T | null | undefined): T {
	if (!variable) throw 'Assertion failed'
	return variable
}

export function assertBoolean(
	value: boolean,
	message: string = 'Assertion failed'
) {
	if (!value) {
		debugger
		throw message
	}
}

export function assertNonZero(
	variable: number,
	message: string = 'Assertion failed'
): number {
	if (variable === 0) {
		console.groupCollapsed()
		console.trace()
		console.groupEnd()
		debugger
		throw message
	}
	return variable
}

export async function pause(time: number) {
	return await new Promise((resolve) => setTimeout(resolve, time))
}
