interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1',
    color: '#ccc',
    size: {
        width: 5,
        height: 5
    }
}
const rect2: Rect = {
    id: '2',
    size: {
        width: 10,
        height: 10
    }
}
rect2.color = '#000000'






















