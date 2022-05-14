class HInhtron {
    constructor(R) {
        this.PI = 3.14159265359;
        this.dientich = () => {
            return this.PI * this.R * this.R;
        };
        this.chuvi = () => {
            return this.PI * this.R * 2;
        };
        this.R = R;
    }
}
class HInhtru extends HInhtron {
    constructor(R, H) {
        super(R);
        this.Sxq = () => {
            return (this.PI * this.R * 2) * 2 * this.H;
        };
        this.Stp = () => {
            return 2 * (this.PI * this.R * this.R) + 2 * this.PI * this.R * this.H;
        };
        this.H = H;
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
