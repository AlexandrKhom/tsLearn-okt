class Car {
    readonly model: string;
    readonly wheels: number = 4
    constructor(theModel: string) {
    this.model = theModel
    }
}
class Car1 {
    readonly wheels: number = 4
    constructor(readonly model: string) {
    }
}










