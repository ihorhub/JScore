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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Man = /** @class */ (function () {
    function Man(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Man;
}());
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(weight, height, name, surname, age, grafter, size_bribe) {
        if (size_bribe === void 0) { size_bribe = 0; }
        var _this = _super.call(this, weight, height) || this;
        _this.name = name;
        _this.surname = surname;
        _this.age = age;
        _this.grafter = grafter;
        _this.size_bribe = size_bribe;
        return _this;
    }
    Deputy.prototype.getBribe = function (money) {
        var max = 10;
        var min = 5;
        if (this.grafter !== false || (money > min && money <= max)) {
            this.size_bribe = money;
            console.log(" " + this.name + " " + this.surname + " giv me my money!!!");
        }
        else {
            console.log(this.name + " " + this.surname + " rrr!! i dont giv money");
        }
    };
    return Deputy;
}(Man));
var newDeputy1 = new Deputy(80, 178, 'Ivan', 'Lebedyn', 40, true);
var newDeputy2 = new Deputy(75, 170, 'Vasyl', 'Kolum', 40, true);
var newDeputy3 = new Deputy(60, 168, 'Kolayn', 'Neberun', 40, false);
var newDeputy4 = new Deputy(55, 160, 'Petro', 'Nahornuj', 40, false);
var newDeputy5 = new Deputy(85, 188, 'Andrij', 'Poruboj', 40, true);
var newDeputy6 = new Deputy(90, 175, 'Vovan', 'Mohnjan', 40, false);
var newDeputy7 = new Deputy(95, 170, 'Oleh', 'Bisuk', 40, true);
var newDeputy8 = new Deputy(88, 190, 'Maksym', 'Centurion', 40, true);
var newDeputy9 = new Deputy(100, 195, 'Wurrko', 'Mutko', 40, true);
var newDeputy10 = new Deputy(120, 185, 'Tolja', 'Molja', 40, false);
var newDeputy11 = new Deputy(125, 187, 'Jura', 'Chywmar', 40, true);
newDeputy1.getBribe(2);
newDeputy2.getBribe(10);
newDeputy3.getBribe(5);
newDeputy4.getBribe(10);
newDeputy5.getBribe(2);
newDeputy6.getBribe(10);
newDeputy7.getBribe(3);
newDeputy8.getBribe(4);
newDeputy9.getBribe(1);
newDeputy10.getBribe(5);
newDeputy11.getBribe(10);
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
var Fraction = /** @class */ (function () {
    function Fraction(FractionNazva) {
        this.listDeputy = [];
        this.FractionNazva = FractionNazva;
    }
    Fraction.prototype.addDeputy = function (dep) {
        this.listDeputy.push(dep);
    };
    Fraction.prototype.removeDeputy = function (dep) {
        var index = this.listDeputy.indexOf(dep);
        this.listDeputy.splice(index, 1);
    };
    Fraction.prototype.removeAllGrafter = function () {
        return this.listDeputy = this.listDeputy.filter(function (value) { return !value.grafter; });
    };
    Fraction.prototype.goAutMaxBriber = function () {
        return this.listDeputy.sort(function (a, b) { return b.size_bribe - a.size_bribe; }).splice(0, 1);
    };
    Fraction.prototype.goAutAllDeputy = function () {
        return this.listDeputy.forEach(function (value) { console.log(value); });
    };
    Fraction.prototype.removeAllDeputy = function () {
        this.listDeputy = [];
    };
    Fraction.prototype.sumBSizeBriber = function () {
        console.log(this.listDeputy.reduce(function (previousValue, currentValue) { return previousValue + currentValue.size_bribe; }, 0));
        ;
    };
    return Fraction;
}());
var Fraction1 = new Fraction('Zelonych');
var Fraction2 = new Fraction('National');
var Fraction3 = new Fraction('Demokratychna');
var Fraction4 = new Fraction('Socialistychna');
Fraction1.addDeputy(newDeputy1);
Fraction1.addDeputy(newDeputy2);
Fraction1.addDeputy(newDeputy3);
Fraction2.addDeputy(newDeputy4);
Fraction2.addDeputy(newDeputy5);
Fraction3.addDeputy(newDeputy6);
Fraction3.addDeputy(newDeputy7);
Fraction3.addDeputy(newDeputy8);
Fraction4.addDeputy(newDeputy9);
Fraction4.addDeputy(newDeputy10);
Fraction4.addDeputy(newDeputy11);
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
var VerkhovnaRada = /** @class */ (function () {
    function VerkhovnaRada() {
        this.mapFraction = [];
    }
    VerkhovnaRada.prototype.addFraction = function (Fraction) { this.mapFraction.push(Fraction); };
    VerkhovnaRada.prototype.removeFraction = function (fraction) { this.mapFraction = this.mapFraction.filter(function (value) { return value.FractionNazva !== fraction.FractionNazva; }); };
    VerkhovnaRada.prototype.getAutAllFraction = function () { return this.mapFraction; };
    VerkhovnaRada.prototype.getAutFraction = function (fraction) { this.mapFraction = this.mapFraction.filter(function (value) { return value.FractionNazva === fraction.FractionNazva; }); };
    VerkhovnaRada.prototype.addDeputeFraction = function (Deputy, Fraction) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            item.listDeputy.push(Deputy);
        }
    };
    VerkhovnaRada.prototype.removeDeputyFraction = function (deputat, fraction) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var fract = _a[_i];
            if (fract.FractionNazva === fraction.FractionNazva) {
                fract.removeDeputy(deputat);
            }
        }
    };
    VerkhovnaRada.prototype.allGrafterFraction = function (fract) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var fraction = _a[_i];
            if (fraction.FractionNazva === fract.FractionNazva) {
                return fraction.removeAllGrafter();
            }
        }
    };
    VerkhovnaRada.prototype.showMaxGrafter = function (fraktsia) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var fraction = _a[_i];
            if (fraction.FractionNazva === fraktsia.FractionNazva) {
                return fraction.goAutMaxBriber();
            }
        }
    };
    VerkhovnaRada.prototype.showBiggestGrafterVR = function () {
        var arr = [];
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var fraction = _a[_i];
            arr.push(fraction.goAutMaxBriber());
        }
        return arr;
    };
    return VerkhovnaRada;
}());
var VRada = new VerkhovnaRada();
VRada.addFraction(Fraction1);
VRada.addFraction(Fraction2);
VRada.addFraction(Fraction3);
VRada.addFraction(Fraction4);
console.log(VRada, 'показуєм фракції');
//VRada.getAutFraction(Fraction3)
console.log('-------------------------');
//console.log(VRada,'показуєм фракції')
console.log('-------------------------');
VRada.addDeputeFraction(newDeputy1, Fraction2);
console.log(Fraction1, 'показуєм фракції');
console.log('-------------------------');
//console.log(VRada,'показуєм фракції')
VRada.removeDeputyFraction(newDeputy2, Fraction1);
console.log(Fraction1, 'показуєм фракції');
console.log('-------------------------');
allGrafterFraction(Fraction4);
console.log(Fraction4, 'показуєм фракції');
showMaxGrafter(Fraction3);
console.log(Fraction3, 'показуєм фракції');
console.log('-------------------------');
VRada.showBiggestGrafterVR();
console.log(VRada, 'показуєм фракції');
console.log('-------------------------');
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
