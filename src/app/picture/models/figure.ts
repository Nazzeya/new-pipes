export interface IFigure {
    id: number,
    type: string,
    coordinates?: ICoord
    width?: number,
    height?: number,
    points?: string,
    r?: number,
    rx?: number,
    ry?: number,
    text?: string,
    fill?: string, //цвет фигуры
    fillText?: string,
    fillId?: string, 
    stroke?: string, //цвет обводки
    strokeWidth?: number, //размер обводки в px
    
    length?: number,
    thickness?: number,
    textVolume?: string
}

export interface ICoord {
    x: number,
    y: number
}