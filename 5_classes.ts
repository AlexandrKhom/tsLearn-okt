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

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() {
        console.log('GO')
    }
}
class Cat extends Animal{
    public setVoice(voice:string): void {
        this.voice = voice
    }
}
///////////////////////

















