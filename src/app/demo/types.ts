export interface LiveFrame{
    value: string
    count: number
    camera: 'Face' | 'Body'
}

export interface Event{
    label: string
    frameStart: number
    frameEnd: number
    camera: 'Face' | 'Body'
}

export const initLiveData: LiveFrame[] = [
    { "value": "change_gear", "count": 1, "camera": "Face" },
    { "value": "drinking", "count": 2, "camera": "Body" },
    { "value": "hair_and_makeup", "count": 3, "camera": "Face" },
    { "value": "phonecall_left", "count": 4, "camera": "Body" },
    { "value": "phonecall_right", "count": 5, "camera": "Face" },
    { "value": "radio", "count": 6, "camera": "Body" },
    { "value": "reach_backseat", "count": 7, "camera": "Face" },
    { "value": "reach_side", "count": 8, "camera": "Body" },
    { "value": "safe_drive", "count": 9, "camera": "Face" },
    { "value": "standstill_or_waiting", "count": 10, "camera": "Body" },
    { "value": "talking_to_passenger", "count": 11, "camera": "Face" },
    { "value": "texting_left", "count": 12, "camera": "Body" },
    { "value": "texting_right", "count": 13, "camera": "Face" },
    { "value": "unclassified", "count": 14, "camera": "Body" },
    { "value": "yawning_with_hand", "count": 15, "camera": "Face" },
    { "value": "yawning_without_hand", "count": 16, "camera": "Body" },
    { "value": "change_gear", "count": 17, "camera": "Face" },
    { "value": "drinking", "count": 18, "camera": "Body" },
    { "value": "hair_and_makeup", "count": 19, "camera": "Face" },
    { "value": "phonecall_left", "count": 20, "camera": "Body" }
]


export const initEventData: Event[] = [
    { "label": "change_gear", "frameStart": 1, "frameEnd": 50, "camera": "Face" },
    { "label": "drinking", "frameStart": 51, "frameEnd": 100, "camera": "Body" },
    { "label": "hair_and_makeup", "frameStart": 101, "frameEnd": 155, "camera": "Face" },
    { "label": "phonecall_left", "frameStart": 156, "frameEnd": 190, "camera": "Body" },
    { "label": "phonecall_right", "frameStart": 191, "frameEnd": 250, "camera": "Face" },
    { "label": "radio", "frameStart": 251, "frameEnd": 290, "camera": "Body" },
    { "label": "reach_backseat", "frameStart": 291, "frameEnd": 350, "camera": "Face" },
    { "label": "reach_side", "frameStart": 351, "frameEnd": 410, "camera": "Body" },
    { "label": "safe_drive", "frameStart": 411, "frameEnd": 470, "camera": "Face" },
    { "label": "standstill_or_waiting", "frameStart": 471, "frameEnd": 510, "camera": "Body" },
    { "label": "talking_to_passenger", "frameStart": 511, "frameEnd": 570, "camera": "Face" },
    { "label": "texting_left", "frameStart": 571, "frameEnd": 620, "camera": "Body" },
    { "label": "texting_right", "frameStart": 621, "frameEnd": 680, "camera": "Face" },
    { "label": "unclassified", "frameStart": 681, "frameEnd": 740, "camera": "Body" },
    { "label": "yawning_with_hand", "frameStart": 741, "frameEnd": 800, "camera": "Face" },
    { "label": "yawning_without_hand", "frameStart": 801, "frameEnd": 850, "camera": "Body" },
    { "label": "change_gear", "frameStart": 851, "frameEnd": 900, "camera": "Face" },
    { "label": "drinking", "frameStart": 901, "frameEnd": 960, "camera": "Body" },
    { "label": "hair_and_makeup", "frameStart": 961, "frameEnd": 1010, "camera": "Face" },
    { "label": "phonecall_left", "frameStart": 1011, "frameEnd": 1070, "camera": "Body" },
    { "label": "phonecall_right", "frameStart": 1071, "frameEnd": 1130, "camera": "Face" }
]