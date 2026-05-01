// ==============================
// 📅 2026-04-23 — Hello World
// ==============================

// console.log('Hellow World!!');

// ==============================
// 📅 2026-04-30 — Palindrome Check
// ==============================

// function isPalindrome(num) {
//   num = Number(num);

//   if (num < 0) return false;

//   return num === Number(num.toString().split('').reverse().join(''));
// }

// const result = isPalindrome('-10');
// console.log(result);


// ==============================
// 📅 2026-04-30 — Fibonacci Number
// ==============================

// var fib = function(n){
//     if (n <= 1) return n;

//     return fib(n-2) + fib(n-1);
// }

// console.log(fib(5))

// ==============================
// 📅 2026-05-01 — Anagram
// ==============================

// var anagram = function(a,b){
//     if(a.length != b.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for(var i = 0; i< a.length; i++){
//         obj1[a[i]] = (obj1[a[i]] || 0) +1;
//          obj2[b[i]] = (obj2[b[i]] || 0) +1;
//     }

//     for(const key in obj1){
//         if(obj1[key] !== obj2[key]) return false;
//     }

//     return true;
// }

// console.log(anagram('pankaj','jknpak'))