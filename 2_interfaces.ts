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
// rect2.id = '3' //readonly !!!

const rect3 = {} as Rect
const rect4 = <Rect>{}

///////////////////////////

interface RectArea extends Rect {
    getArea: ()=> number
}

const rect5: RectArea = {
    id: '5',
    size: {
        height: 1,
        width: 1
    },
    getArea(): number {
        return this.height * this.width
    }
}

///////////////////////

interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px',
    radius: '5'
}










