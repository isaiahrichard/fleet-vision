export interface LiveFrame{
    value: string
    frameNum: number
    camera: 'Face' | 'Body'
}

export interface Event{
    label: string
    frameStart: number
    frameEnd: number
    camera: 'Face' | 'Body'
}