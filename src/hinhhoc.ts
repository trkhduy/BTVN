class HInhtron {
    R: number;
    PI: number = 3.14159265359;
    constructor(R: number) {
        this.R = R;
    }
    dientich = () => {
        return this.PI * this.R * this.R;
    }
    chuvi = () => {
        return this.PI * this.R * 2;
    }
}
class HInhtru extends HInhtron {
    H: number;
    constructor(R: number, H: number) {
        super(R);
        this.H = H;
    }
    Sxq = () => {
        return (this.PI * this.R * 2) * 2 * this.H;
    }
    Stp = () => {
        return 2 * (this.PI * this.R * this.R) + 2 * this.PI * this.R * this.H;
    }
}
var hinhtru1 = new HInhtru(5, 10);
console.log(hinhtru1.dientich());
console.log(hinhtru1.chuvi());
console.log(hinhtru1.Stp());
console.log(hinhtru1.Sxq());

var hinhtru2 = new HInhtru(6, 12);
console.log(hinhtru2.dientich());
console.log(hinhtru2.chuvi());
console.log(hinhtru2.Stp());
console.log(hinhtru2.Sxq());
