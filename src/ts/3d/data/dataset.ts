import { SourceData } from '../templates'

export const templatesData: SourceData[] = [
	{
		mesh: 'void',
		name: 'void',
		px: 'void',
		nx: 'void',
		py: 'void',
		ny: 'void',
		pz: 'void',
		nz: 'void',
	},
	{
		mesh: 'void',
		name: 'earth',
		px: 'void',
		nx: 'void',
		py: 'void',
		ny: 'void',
		pz: 'earth',
		nz: 'void',
	},
	{
		mesh: 'assets/meshes/corner.obj',
		name: 'corner',
		px: 'wall_r',
		nx: 'void',
		py: 'void',
		ny: 'wall_l',
		pz: 'void',
		nz: 'earth',
	},
	{
		mesh: 'assets/meshes/wall.obj',
		name: 'wall',
		px: 'wall_r',
		nx: 'wall_l',
		py: 'void',
		ny: 'void',
		pz: 'void',
		nz: 'earth',
	},
]
