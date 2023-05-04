
// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'Wes';
// let name2 = name;
// console.log(name, name2);
// name = 'wesley';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

/* So, how do we fix this? We take a copy instead!
* 如果直接使用slice()不指定起始與結束位置的話，就等於直接複製整個整列
*/
const team2 = players.slice();

// one way

/* or create a new array and concat the old one in
* 使用concat()可以合併陣列，所以如果使用空陣列來合併原陣列，也會達到複製整個陣列的效果
*/
const team3 = [].concat(players);

/* or use the new ES6 Spread
* 直接使用 ES6 的Spread
*/
const team4 = [...players];
team4[3] = 'heeee hawww';


/* or use the new ES6 from
* 直接使用 ES6 的from
*/
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

/* how do we take a copy instead?
* 指定一個空的物件並把目標對象塞進去
*/
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

// 把目標對象作轉換賦值的動作
const dev2 = JSON.parse(JSON.stringify(wes));
