import Weighted from './Weighted'

export default class implements Weighted {
  constructor (
    public baseForm: string,
    public pastSimple: string,
    public pastParticiple: string,
    public weight: number = 0
  ) {}
}