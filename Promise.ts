// let str1 = "[{}]";
// let str2 = "[{}[]][]";
// let str3 = "[{}][]";
//
// function trustyScobe(str) {
//   let newArr = [];
//
//   let obj = {
//     "}": "{",
//     ")": "(",
//     "]": "[",
//   };
//   for (let i = 0; i < str.length; i++) {
//     if (findIndex(str[i])) {
//       if (obj[str[i]] !== newArr.pop()) {
//         return false;
//       }
//     } else {
//       newArr.push(str[i]);
//     }
//   }
//
//   return newArr.length === 0;
// }
//
// const findIndex = (index) => {
//   return ["}", ")", "]"].includes(index);
// };
//
// console.log(trustyScobe(str1));
// console.log(trustyScobe(str2));
// console.log(trustyScobe(str3));
// const str = "{[[]{}]}()()";
//
function func(scobeInput) {
  let arr = [];

  let scobe = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < scobeInput.length; i++) {
    let char = scobeInput[i];
    if (indexOf(char)) {
      if (arr.pop() !== scobe[char]) {
        return false;
      }
    } else {
      arr.push(char);
    }
  }
  return arr.length === 0;
}
const indexOf = (scobe) => {
  return ["}", "]", ")"].includes(scobe);
};
function isBalanced(string) {
  let startScobe = "({[";
  let endScobe = ")}]";
  let map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  let resultArr = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (startScobe.includes(char)) {
      resultArr.push(char);
    } else if (endScobe.includes(char)) {
      if (map[char] !== resultArr.pop()) {
        return false;
      }
    }
  }
  // console.log(resultArr, "resultArr");
  return !resultArr.length;
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false

// console.log(func(str));
// console.log(func(str2));
// console.log(func(str3));

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map((url) => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests).then((responses) =>
  responses.forEach((response) => alert(`${response.url}: ${response.status}`)),
);

let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`),
);

Promise.all(requests)
  .then((responses) => {
    // все промисы успешно завершены
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then((users) => users.forEach((user) => alert(user.name)));

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   // (*)
//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       alert(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       alert(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });
//
// Полифил
// Если браузер не поддерживает Promise.allSettled, для него легко сделать полифил:
//
//   if(!Promise.allSettled) {
//     Promise.allSettled = function(promises) {
//       return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//         status: 'fulfilled',
//         value: value
//       }), error => ({
//         status: 'rejected',
//         reason: error
//       }))));
//     };
//   }
//
// let cache = new Map();
//
// function loadCached(url) {
//   if (cache.has(url)) {
//     return Promise.resolve(cache.get(url)); // (*)
//   }
//
//   return fetch(url)
//     .then((response) => response.text())
//     .then((text) => {
//       cache.set(url, text);
//       return text;
//     });
// }

class Queue {
  constructor() {
    // todo
  }

  enqueue(item) {
    // todo: добавить элемент в конец очереди
  }

  dequeue() {
    // todo: удалить первый элемент из очереди
  }

  get size() {
    // todo: возвращает размер списка
    // нельзя использовать геттер
  }
}
