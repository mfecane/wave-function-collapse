export class Vector2 {
	public constructor(public x: number = 0, public y: number = 0) {}

	public clone(): Vector2 {
		return new Vector2(this.x, this.y)
	}

	public multiplyScalar(value: number): Vector2 {
		this.x *= value
		this.y *= value
		return this
	}

	public add(other: Vector2): Vector2 {
		this.x += other.x
		this.y += other.y
		return this
	}

	public sub(other: Vector2): Vector2 {
		this.x -= other.x
		this.y -= other.y
		return this
	}

	public rotateAroundZero(angle: number): Vector2 {
		const { x, y } = this
		this.x = x * Math.cos(angle) - y * Math.sin(angle)
		this.y = x * Math.sin(angle) + y * Math.cos(angle)
		return this
	}
}

export class Vector3 {
	public constructor(
		public x: number = 0,
		public y: number = 0,
		public z: number = 0
	) {}

	public clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z)
	}

	public multiplyScalar(value: number): Vector3 {
		this.x *= value
		this.y *= value
		this.z *= value
		return this
	}

	public add(other: Vector3): Vector3 {
		this.x += other.x
		this.y += other.y
		this.z += other.z
		return this
	}

	public length(): number {
		return Math.sqrt(this.squareLength())
	}

	public squareLength(): number {
		return this.x * this.x + this.y * this.y + this.z * this.z
	}
}

export class Transform3d {
	public position: Vector3 = new Vector3()
	public rotation: Vector3 = new Vector3()

	public length

	public closeTo(other: Transform3d) {
		return (
			this.position
				.clone()
				.add(other.position.clone().multiplyScalar(-1))
				.squareLength() < 0.5
		)
	}

	public closeToPosition(otherPosition: Vector3) {
		return (
			this.position
				.clone()
				.add(otherPosition.clone().multiplyScalar(-1))
				.squareLength() < 0.5
		)
	}

	public add(other: Transform3d) {
		const newTransform = new Transform3d()
		newTransform.position = this.position.clone().add(other.position)
		return newTransform
	}
}
