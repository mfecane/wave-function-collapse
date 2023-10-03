Run

    	npm run dev

to play with the solver

# TODO

-   implement radial symmetry
-   add weight to model
-   nicer GUI, logo
-   add mesh shape description with variants of model
-   place and drag to rotate
-   steal voxel editor from three.js
-   seeded random
-   environment, shaders, improve art
-   add voxel ignored by parser
-   can editor can be refactored to be more general

# Check

-   https://threejs.org/examples/#webgl_interactive_voxelpainter
-   fog, plane
    https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_3mf_materials.html

# 3d

Sky

    	import { Sky } from 'three/examples/jsm/objects/Sky.js'

    	const sky = new Sky()
    	sky.scale.setScalar(450000)

    	const elevation = 2
    	const azimuth = 180
    	const phi = MathUtils.degToRad(90 - elevation)
    	const theta = MathUtils.degToRad(azimuth)
    	const sun = new Vector3().setFromSphericalCoords(1, phi, theta)

    	const turbidity = 10
    	const rayleigh = 3
    	const mieCoefficient = 0.005
    	const mieDirectionalG = 0.7

    	sky.material.uniforms.sunPosition.value.copy(sun)
    	sky.material.uniforms.turbidity.value = turbidity
    	sky.material.uniforms.rayleigh.value = rayleigh
    	sky.material.uniforms.mieCoefficient.value = mieCoefficient
    	sky.material.uniforms.mieDirectionalG.value = mieDirectionalG

    	this.scene.add(sky)
