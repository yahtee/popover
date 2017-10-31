import {Injectable} from '@angular/core'

export enum Position {
  BELOW,
  ABOVE,
  LEFT,
  RIGHT,
  CENTER,
}

export type PositionString =
  'below' | 'bottom' |
  'above' | 'top' |
  'left' |
  'right' |
  'center' | 'centre' | 'middle'

export interface Style {
  x: number
  y: number
  top: number
  left: number
}

const eq = ([a1, b1]: any[]) => ([a2, b2]: any[]) => a1 == a2 && b1 == b2

@Injectable()
export class PositioningService {

  private mapStringToEnum(string: PositionString): Position {
    switch (string) {
      case 'below':
      case 'bottom':
        return Position.BELOW
      case 'above':
      case 'top':
        return Position.ABOVE
      case 'left':
        return Position.LEFT
      case 'right':
        return Position.RIGHT
      case 'center':
      case 'centre':
      case 'middle':
        return Position.CENTER
      default:
        throw `Invalid string spec ${string}. Valid ones are: below, bottom, above, top, left, right, center, centre, and middle.`
    }
  }

  private mapSpecToPairOfStrings(string: string): [PositionString, PositionString] {
    const dims = string.split('-')
    // If there is only one dimension, we assume that the second one is center
    const dim1 = dims[0] as PositionString
    const dim2 = (dims[1] == null ? 'center' : dims[1]) as PositionString
    return [dim1, dim2]
  }

  private map(string: string): [Position, Position] {
    return this.mapSpecToPairOfStrings(string).map(str => this.mapStringToEnum(str))
  }

  public getStyles(spec: string): Style {
    const is = eq(this.map(spec))
    switch (true) {
      case is([Position.BELOW, Position.RIGHT]):
        return {x: 0, y: 0, top: 100, left: 0}
      case is([Position.BELOW, Position.CENTER]):
        return {x: -50, y: 0, top: 100, left: 50}
      case is([Position.BELOW, Position.LEFT]):
        return {x: -100, y: 0, top: 100, left: 100}
      case is([Position.CENTER, Position.RIGHT]):
      case is([Position.RIGHT, Position.CENTER]):
        return {x: 0, y: -50, top: 50, left: 100}
      case is([Position.CENTER, Position.CENTER]):
        return {x: -50, y: -50, top: 50, left: 50}
      case is([Position.CENTER, Position.LEFT]):
      case is([Position.LEFT, Position.CENTER]):
        return {x: -100, y: -50, top: 50, left: 0}
      case is([Position.ABOVE, Position.RIGHT]):
        return {x: 0, y: -100, top: 0, left: 0}
      case is([Position.ABOVE, Position.CENTER]):
        return {x: -50, y: -100, top: 0, left: 50}
      case is([Position.ABOVE, Position.LEFT]):
        return {x: -100, y: -100, top: 0, left: 100}
      default:
        throw new Error(`Invalid position ${spec}.`)
    }
  }

}
