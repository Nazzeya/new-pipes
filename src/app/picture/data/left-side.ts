import { IFigure } from "../models/figure";

export const leftSide: IFigure[] = [
    {
        id: 1,
        type: 'rect',
        width: 90,
        height: 40,
        coordinates: {
            x: 20,
            y: 30
        },
        fill: 'LightSteelBlue',
        stroke: 'black',
    },
    {
        id: 2,
        type: 'rect',
        width: 90,
        height: 40,
        coordinates: {
            x: 130,
            y: 30
        },
        fill: 'LightSteelBlue',
        stroke: 'black'
    },
    {
        id: 3,
        type: 'rect',
        width: 90,
        height: 40,
        coordinates: {
            x: 240,
            y: 30
        },
        fill: 'LightSteelBlue',
        stroke: 'black'
    },
    {
        id: 11,
        type: 'text',
        coordinates: {
            x: 35,
            y: 45
        },
        text: '171.11',
        fill: 'blue'
    },
    {
        id: 11,
        type: 'text',
        coordinates: {
            x: 150,
            y: 45
        },
        text: '171.11',
        fill: 'blue'
    },
    {
        id: 11,
        type: 'text',
        coordinates: {
            x: 260,
            y: 45
        },
        text: '171.11',
        fill: 'blue'
    },
    {
        id: 12,
        type: 'text',
        coordinates: {
            x: 50,
            y: 60
        },
        text: 'P01',
        fill: 'black'
    },
    {
        id: 12,
        type: 'text',
        coordinates: {
            x: 165,
            y: 60
        },
        text: 'P02',
        fill: 'black'   
    },
    {
        id: 12,
        type: 'text',
        coordinates: {
            x: 275,
            y: 60
        },
        text: 'P03',
        fill: 'black'
    }
]