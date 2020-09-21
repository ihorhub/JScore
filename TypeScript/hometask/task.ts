// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак



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

    constructor(weight:number, height:number,name:string,surname:string,age:number,grafter:boolean | number,size_bribe=0) {
        super(weight,height);
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.grafter=grafter;
        this.size_bribe=size_bribe

    }
    getBribe(money:number){
        let max=10
        let min = 5
        if (this.grafter!==false || (money>min && money<= max)  ){
            this.size_bribe=money

            console.log(` ${this.name} ${this.surname} giv me my money!!!` )
        }else {console.log(`${this.name} ${this.surname} rrr!! i dont giv money`) }
    }
}
const newDeputy1 = new Deputy(80,178,'Ivan','Lebedyn',40,true,);
const newDeputy2 = new Deputy(75,170,'Vasyl','Kolum',40,true,);
const newDeputy3 = new Deputy(60,168,'Kolayn','Neberun',40,false,);
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
newDeputy7.getBribe(3)
newDeputy8.getBribe(4)
newDeputy9.getBribe(1)
newDeputy10.getBribe(5)
newDeputy11.getBribe(10)

 // //    до цих пір все працює!!!!!!!!!!!!!!!!!

// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції

 class Fraction {
     listDeputy: Deputy[] = []
     FractionNazva: string

     constructor(FractionNazva: string) {
         this.FractionNazva = FractionNazva

     }

     addDeputy(dep: Deputy): void {
         this.listDeputy.push(dep)
     }

     removeDeputy(dep: Deputy): void {
         let index = this.listDeputy.indexOf(dep)
         this.listDeputy.splice(index, 1);

     }

     removeAllGrafter() {
        return this.listDeputy=this.listDeputy.filter(value => !value.grafter)
     }

     goAutMaxBriber() {

          return this.listDeputy.sort((a,b)=>b.size_bribe-a.size_bribe).splice(0,1)


     }

     goAutAllDeputy() {
         return this.listDeputy.forEach(value => {console.log(value)})
     }

     removeAllDeputy() {
         this.listDeputy = []
     }

     sumBSizeBriber():void {
         console.log(this.listDeputy.reduce((previousValue, currentValue) => previousValue + currentValue.size_bribe, 0));;



     }

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
//Fraction1.removeDeputy(newDeputy3)
//Fraction2.removeAllGrafter()
//Fraction3.goAutMaxBriber()
//Fraction4.sumBSizeBriber()
console.log('--------------------------');
// console.log(Fraction1)
// console.log('--------------------------');
// console.log(Fraction2)
// console.log('--------------------------');
// console.log(Fraction3)
// console.log('--------------------------');

 //console.log(Fraction4)

//Fraction1.removeAllDeputy()
// Fraction2.removeDeputy(newDeputy6 )
// Fraction2.removeAllGrafter()
// //Fraction3.removeAllDeputy()
// Fraction4.sumBSizeBriber()
// Fraction4.goAutMaxBriber()
//Fraction4.removeAllDeputy()
//Fraction1.goAutAllDeputy()


// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак

    class VerkhovnaRada {
    mapFraction:Fraction[]=[]

        constructor() {

        }
addFraction(Fraction){this.mapFraction.push(Fraction)}
removeFraction(fraction:Fraction): void
{this.mapFraction= this.mapFraction.filter(value => value.FractionNazva!==fraction.FractionNazva)}

getAutAllFraction(){return this.mapFraction}

getAutFraction(fraction:Fraction):void
{this.mapFraction=this.mapFraction.filter(value => value.FractionNazva===fraction.FractionNazva) }

addDeputeFraction(Deputy,Fraction):void
{for (const item of this.mapFraction) { item.listDeputy.push(Deputy)
} }
removeDeputyFraction(deputat:Deputy,fraction:Fraction):void
{for (const fract of this.mapFraction) if (fract.FractionNazva===fraction.FractionNazva){
   fract.removeDeputy(deputat)
}}
allGrafterFraction(fract:Fraction){for (const fraction of this.mapFraction) {
                if (fraction.FractionNazva===fract.FractionNazva){
                    return fraction.removeAllGrafter()
                }
            }}
            showMaxGrafter(fraktsia: Fraction) {
            for (const fraction of this.mapFraction) {
                if (fraction.FractionNazva === fraktsia.FractionNazva) {
                    return fraction.goAutMaxBriber()
                }
            }
        }
        showBiggestGrafterVR(){  const arr:Deputy[]=[];
            for (const fraction of this.mapFraction) {
                arr.push(fraction.goAutMaxBriber());

            }
            return arr

        }
    }
    const VRada= new VerkhovnaRada()
VRada. addFraction(Fraction1)
VRada. addFraction(Fraction2)
VRada. addFraction(Fraction3)
VRada. addFraction(Fraction4)
console.log(VRada,'показуєм фракції')
//VRada.getAutFraction(Fraction3)
console.log('-------------------------')
//console.log(VRada,'показуєм фракції')
console.log('-------------------------')
VRada.addDeputeFraction(newDeputy1,Fraction2)
console.log(Fraction1,'показуєм фракції')
console.log('-------------------------')
//console.log(VRada,'показуєм фракції')
VRada.removeDeputyFraction(newDeputy2,Fraction1)
console.log(Fraction1,'показуєм фракції')
console.log('-------------------------')
allGrafterFraction(Fraction4)
console.log(Fraction4,'показуєм фракції')

showMaxGrafter(Fraction3)
console.log(Fraction3,'показуєм фракції')
console.log('-------------------------')
VRada.showBiggestGrafterVR()
console.log(VRada,'показуєм фракції')
console.log('-------------------------')
//VRada.removeFraction(Fraction1)
// console.log('-------------------------')
// //console.log(VRada.getAutAllFraction(), "виводимо");
//
//
// console.log('-------------------------')
// //console.log(VRada,'remove')
// console.log('-------------------------')
// console.log('-------------------------')

 //console.log(VRada.addDeputeFraction(newDeputy2,Fraction1))


