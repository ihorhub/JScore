abstract class Man {
    weight:number;
    height:number;
    constructor( weight:number, height:number) {
        this.weight=weight
        this.height=height
    }
}
class  Deputy extends Man{
    name:string;
    surname:string;
    age:number;
    grafter?:boolean | number;
    size_bribe:number;

    constructor(weight, height,name,surname,age,grafter,size_bribe=0) {
        super(weight,height);
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.grafter=grafter;
        this.size_bribe=size_bribe

    }
    getBribe(money:number){
        let max=10
        if (this.grafter===false && this.size_bribe===max  ){
            this.size_bribe=money
            console.log(`i ${this.name} ${this.surname} giv me my money!!!`
            )
        }else {console.log("rrr!! i dont giv money")}
    }
}
const newDeputy1 = new Deputy(80,178,'Ivan','Lebedyn',40,true,);
const newDeputy2 = new Deputy(75,170,'Vasyl','Kolum',40,true,);
const newDeputy3 = new Deputy(60,168,'Kolayn','Neberun',40,true,);
const newDeputy4 = new Deputy(55,160,'Petro','Nahornuj',40,false,);
const newDeputy5 = new Deputy(85,188,'Andrij','Poruboj',40,true,);
const newDeputy6 = new Deputy(90,175,'Vovan','Mohnjan',40,false,);
const newDeputy7 = new Deputy(95,170,'Oleh','Bisuk',40,true,);
const newDeputy8 = new Deputy(88,190,'Maksym','Centurion',40,true,);
const newDeputy9 = new Deputy(100,195,'Wurrko','Mutko',40,true,);
const newDeputy10 = new Deputy(120,185,'Tolja','Molja',40,false,);
const newDeputy11 = new Deputy(125,187,'Jura','Chywmar',40,true,);
newDeputy1.getBribe(2)
newDeputy2.getBribe(10)
newDeputy3.getBribe(5)
newDeputy4.getBribe(10)
newDeputy5.getBribe(2)
newDeputy6.getBribe(10)
newDeputy7.getBribe(8)
newDeputy8.getBribe(7)
newDeputy9.getBribe(4)
newDeputy10.getBribe(5)
newDeputy11.getBribe(10)

 class Fraction {
   listDeputy:Deputy[]=[]
    FractionNazva:string
    constructor(FractionNazva:string) {
       this.FractionNazva=FractionNazva

    }

    addDeputy(Deputy){this.listDeputy.push(Deputy)}
    removeDeputy(Deputy){ for (const ddp of this.listDeputy){ if (Deputy===ddp){this.listDeputy.filter(value => Deputy)}}}
    removeAllGrafter(){this.listDeputy.filter(value => value.grafter)}
    goAutMaxBriber(){return  this.listDeputy.sort((a,b)=> b.size_bribe-a.size_bribe)[0]}
    goAutAllDeputy(){ console.log( this.listDeputy)}
    removeAllDeputy(){ console.log(this.listDeputy=[])}
    sumBSizeBriber(){ this.listDeputy.reduce((previousValue, currentValue) => previousValue+currentValue.size_bribe,0)}

    }
    const Fraction1= new Fraction('Zelonych')
    const Fraction2= new Fraction('National')
    const Fraction3= new Fraction('Demokratychna')
    const Fraction4= new Fraction('Socialistychna')
Fraction1.addDeputy(newDeputy1)
Fraction1.addDeputy(newDeputy2)
Fraction1.addDeputy(newDeputy3)
Fraction2.addDeputy(newDeputy4)
Fraction2.addDeputy(newDeputy5)
Fraction3.addDeputy(newDeputy6)
Fraction3.addDeputy(newDeputy7)
Fraction3.addDeputy(newDeputy8)
Fraction4.addDeputy(newDeputy9)
Fraction4.addDeputy(newDeputy10)
Fraction4.addDeputy(newDeputy11)
Fraction1.removeAllDeputy()
Fraction2.removeAllGrafter()
Fraction3.removeAllDeputy()
Fraction4.sumBSizeBriber()
Fraction4.goAutMaxBriber()
Fraction4.removeAllDeputy()
Fraction1.goAutAllDeputy()
Fraction2.removeDeputy()


    class VerkhovnaRada {
    mapFraction:Fraction[]=[]

        constructor() {

        }
addFraction(Fraction){this.mapFraction.push(Fraction)}
removeFraction(){this.mapFraction.filter(value => value.FractionNazva!==value.FractionNazva)}
getAutAllFraction(){return this.mapFraction}
getAutFraction(Fraction){return this.mapFraction.filter(value => Fraction.FractionNazva)}
addDeputeFraction(Deputy,Fraction){for (let item of this.mapFraction) if (Fraction===item.FractionNazva ){
    this.mapFraction.push(Deputy)
} }
removeDeputyFraction(Deputy){for (const dep of this.mapFraction) if (Deputy===dep.FractionNazva){
    this.mapFraction.filter(value => Deputy)
}}



    }
    const VerkhovnaRada= new VerkhovnaRada()
VerkhovnaRada.addFraction(Fraction1)
    
