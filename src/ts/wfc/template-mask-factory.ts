import { TemplateMask } from '@/ts/wfc/template-mask'

export class TemplateMaskFactory {
	public create(items: number) {
		return new TemplateMask(items)
	}
}
