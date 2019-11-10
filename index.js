// issue with es5

var x;

x = 5;

x = 6;

console.log(x);

{
  var x = 5;
}

{
  var x = 6;
}

console.log(x);

(arguments => {
  var x = 5;
})();

console.log(x);

// es6

// let x = 5;

// x = 6;

{
  let x = 6;
}

console.log(x);

// const x = 5;

// x = 6;

{
  const x = 5;
}

console.log(x);

const x = { a: 1, b: 2 };

const arr = [1, 2, 3];

arr.push(4);

x.b = 3;

console.log(arr);

console.log(x);

// const x = { a: 2, b: 3}

// string literals

const fname = "yagnesh";

const lname = "modh";

// const fullName = fname + ' '  + lname;

// yagnesh's car

// const p = fname + '\'s car' ;

// console.log(p)

// console.log(fullName)

const fullName = `${true ? "yagnesh" : "yag"} ${lname}`;

console.log(fullName);

const es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "" +
  "</body>" +
  "</html>";

console.log(es5);

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(es6);

const foo = function() {
  console.log("origila");
};

const b = 2;

// const obj = {
//     a: 1,
//     b: b,
//     c: function() {
//         return 3;
//     }
// }

const obj = {
  a: 1,
  b,
  c() {
    return 3;
  }
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c());

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  x = 3;

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("Making Animal Sound");
  }
}

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  makeSound() {
    super.makeSound();
    console.log("Meow!!");
  }
}

// let a = new Animal();
// a.type = 'animal'
// console.log(a.type);
// console.log(a.makeSound())
// console.log(a.x)

let c = new Cat();

console.log(c.type);
console.log(c.makeSound());

const obj = { a: 1, b: 2, c: 3 };

obj.c = 4;

obj.d = 5;

console.log(obj);

const obj = { a: 1, b: 2, c: 3 };

const obj1 = { ...obj, d: 4 };

console.log(obj1);

console.log(obj);

const obj = { a: 1, b: 2, c: 3 };

delete obj.c;

const obj1 = { ...obj, d: 4 };

console.log(obj1);

console.log(obj);

const asdfafasf = { a: 1, b: 2, c: 3 };

// console.log(asdfafasf.a)
// console.log(asdfafasf.b)
// console.log(asdfafasf.c)

//destructuring
const { a, b } = asdfafasf;

console.log(a);
console.log(b);

const asdfafasf = { a: 1, b: 2, c: 3 };

//destructuring
const { c, ...rest } = asdfafasf;

console.log(rest);

const a = { a: 1, b: 2, c: 3 };

//destructuring
const { a: aa } = a;

console.log(aa);

const arr = [1, 2, 3, 4, 5];

// const arr1 = [6, ...arr];

const arr1 = [...arr.slice(0, 2), ...arr.slice(3)];

console.log(arr1);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;

console.log(a);

console.log(rest);

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  x = 3;

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("Making Animal Sound");
  }

  timer() {
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  }
}

let a = new Animal();

console.log(a.timer());

// function add(a, b) {
//     return a + b;
// }

// const add = function(a, b) {
//     return a + b;
// }

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

const people = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rahul",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "female"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const newObj = { name: "priyanka", gender: "female" };

const newPeople = [newObj, ...people];

const index = newPeople.findIndex(x => x.name === "rohit");

console.log(index);

const updatePeople = [
  ...newPeople.slice(0, index),
  ...newPeople.slice(index + 1)
];

console.log(updatePeople);

const arr = [...Array(1000000).keys()];

console.time("for loop");

const newArr = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element);
}

console.timeEnd("for loop");

console.time("foreach loop");

const newArr1 = [];
arr.forEach(element => {
  newArr1.push(element);
});

console.timeEnd("foreach loop");

const newPeople = people.map((item, index) => {
  if (item.name === "rohit") {
    item.gender = "male";
  }
  if (item.gender === "male") {
    return { ...item, profession: "cricketer" };
  }
  return { ...item, profession: "actor" };
});

console.log(newPeople);

const people = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rahul",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

// {
//     male: [],
//     female: []
// }

// const obj = {}

// obj['male'] = [];

// console.log(obj)

const groupBy = people.reduce((p, c) => {
  console.log(p);
  console.log(p[c.gender]);
  console.log(c);
  p[c.gender] = p[c.gender] || [];
  console.log(p);
  p[c.gender].push(c);
  console.log(p);
  return p;
}, {});

console.log(groupBy);

// const a = 1;
// const b = 2;

// const c = a || b;
// const d = a && b;

// console.log(c);
// console.log(d);

// const arr = [1,2,3,4,5];

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum += element;
// }

// console.log(sum)

// const sum = arr.reduce((previous, current) => {
//     console.log(previous)
//     console.log(current)
//     return previous + current
// }, 0)

// console.log(sum)

// const newPeople = people.map((item, index) => {
//     if(item.name === "rohit") {
//         item.gender =  'male'
//     }
//     if(item.gender === 'male') {
//         return {...item, profession: 'cricketer'}
//     }
//     return {...item, profession: 'actor'}
// });

// console.log(newPeople)

// const updatePeople = people.reduce((p, c) => {
//     if(c.name === 'rohit') {
//         c = {...c, gender: 'male'}
//     }
//     if(c.gender === 'male') {
//         return [...p, {...c, profession: 'cricketer'}]
//     }
//     return [...p, {...c, profession: 'actor'}]
// }, []);

// console.log(updatePeople)

// const arr = [...Array(1000000).keys()];

// console.time('map loop')
// const mapRes = arr.map(x => x);
// console.timeEnd('map loop')

// console.time('reduce loop')
// const reduceRes = arr.reduce(() => {}, 0)
// console.timeEnd('reduce loop')

// // map

// // reduce

// // for in

// // for of
// for of
// for in

const people = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rahul",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const obj = { a: 1, b: 2, c: 3, d: 4 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
  // if (object.hasOwnProperty(key)) {
  //     const element = object[key];

  // }
}
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p1 res");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2 res");
  }, 3000);
});

const fun = async () => {
  try {
    const res = await Promise.race([p2, p1]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

console.log(fun());

// generators

async function abc() {
  await 1;
  await 1;
  await 1;
  await 1;
}

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = xyz();

for (const iterator of gen) {
  console.log(iterator);
}

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
