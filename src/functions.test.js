/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
function max(a, b) {
	if (a < b) {
		return b
	}
	if (a > b) {
		return a
	}
	if (isNaN(a)) {
		return b
	}
	if (isNaN(b)) {
		return a
	} else {
		return null
	}
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
function maxOfThree(a, b, c) {
	if (a > b && a > c) {
		return a
	}
	if (b > a && b > c) {
		return b
	}
	if (c > a && c > b) {
		return c
	}
	if (a > b && isNaN(c)) {
		return a
	}
	if (a > c && isNaN(b)) {
		return a
	}
	if (b > a && isNaN(c)) {
		return b
	}
	if (b > c && isNaN(a)) {
		return b
	}
	if (c > a && isNaN(b)) {
		return c
	}
	if (c > b && isNaN(a)) {
		return c
	}
	if (isNaN(b) && isNaN(c)) {
		return a
	}
	if (isNaN(a) && isNaN(c)) {
		return b
	}
	if (isNaN(a) && isNaN(b)) {
		return c
	} else {
		return null
	}
}
// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
function sum(a, b) {
	return a + b
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
function sumOfArray(x) {
	let numbers2 = 0
	for (let i = 0; i < x.length; i++) {
		numbers2 = numbers2 + x[i]
	}
	return numbers2
}
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
function isVowel(x) {
	if (
		x === 'a' ||
		x === 'A' ||
		x === 'e' ||
		x === 'E' ||
		x === 'i' ||
		x === 'I' ||
		x === 'o' ||
		x === 'O' ||
		x === 'u' ||
		x === 'U'
	) {
		return true
	} else {
		return false
	}
}
// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */
function rovarspraket(x) {
	if (isNaN(x)) {
		let x2 = x.split('')
		let x3 = ''
		x2.forEach(function (letter) {
			if (!!~'aeiou'.indexOf(letter)) {
				x3 += letter
			} else {
				x3 += letter + 'o' + letter
			}
		})
		return x3
	} else {
		return x.toString()
	}
}
// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
function reverse(x) {
	let x2 = x.split('')
	let x3 = x2.reverse()
	let x4 = x3.join('')
	return x4
}
// ...

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
function findLongestWord(string) {
	let str = string.split(' ')
	let longest = 0
	let word = null
	for (var i = 0; i <= str.length - 1; i++) {
		if (longest < str[i].length) {
			longest = str[i].length
			word = str[i]
		}
	}
	return word
}
// from  Code Wars

function remove(s) {
	return s.split('!').join('') + '!'
}
// C# version
// public class Kata
// {
//   public static string Remove(string s)
//   {
//     return s.Remove("!", "") + "!";
//     }
// }




// using System;
// public class Kata
// {
//   public static string Remove(string s)
//   {
// //     s = s.Replace("!", String.Empty);
//     var bangCounter = 0;
//     foreach (var letter in s)
//     {
//       if (letter == '!')
//       {
//         bangCounter++;
//       }
//       else
//       {
//         bangCounter = 0;
//       }
//     }  
//     return s.Replace("!", String.Empty) + new String('!', bangCounter);
//   }
// }

// namespace Solution {
//   using NUnit.Framework;
//   using System;

//   [TestFixture]
//   public class SolutionTest
//   {
//     [Test, Description("It should work for basic tests")]
//     public void SampleTest()
//     {
//       Assert.AreEqual("Hi!", Kata.Remove("Hi!"));
//       Assert.AreEqual("Hi!!!", Kata.Remove("Hi!!!"));
//       Assert.AreEqual("Hi", Kata.Remove("!Hi"));
//       Assert.AreEqual("Hi!", Kata.Remove("!Hi!"));
//       Assert.AreEqual("Hi Hi!", Kata.Remove("Hi! Hi!"));
//       Assert.AreEqual("Hi", Kata.Remove("Hi"));
//     }
//   }
// }

function alphabetWar(fight) {
	let count = 0
	let hits = fight.split('').map(hit => {
		if (hit === "w") {
			count += 4
		}
		if (hit === "m") {
			count -= 4
		}
		if (hit === "p") {
			count += 3
		}
		if (hit === "q") {
			count -= 3
		}
		if (hit === "b") {
			count += 2
		}
		if (hit === "d") {
			count -= 2
		}
		if (hit === "s") {
			count += 1
		}
		if (hit === "z") {
			count -= 1
		}
	})
	if (count < 0) {
		return "Right side wins!"
	}
	if (count > 0) {
		return "Left side wins!"
	} else {
		return "Let's fight again!";
	}
}
function findOutlier(integers) {
	let odd = 0
	let even = 0
	let countE = 0
	let countO = 0
	integers.map(x => {
		if (x % 2 == 0) {
			even = x
			countE++
		} else {
			odd = x
			countO++
		}
	})
	if (countE < countO) {
		return even
	} else {
		return odd
	}
}

function longest(s1, s2) {
	let s = s1 + s2
	let s3 = s.split("").filter(function (item, index) {
		return s.indexOf(item) >= index;
	});
	return s3.sort().join("")
}

function smallEnough(a, limit) {
	let counter = 0
	a.map(b => {
		if (b > limit) {
			counter++
		}
	})
	if (counter > 0) {
		return false
	} else {
		return true
	}
}

const largestArrangement = array => {
	let maxCombine = (a) => +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''));
	return [array].map(maxCombine).pop()
}
// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
	t.is(max(1, 3), 3)
	t.is(max(0, 3), 3)
	t.is(max(10, 3), 10)
	t.is(max(-1, -3), -1)
	t.is(max('aaa', 0), 0)
	t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', t => {
	t.is(maxOfThree(1, 3, 2), 3)
	t.is(maxOfThree(0, 3, -1), 3)
	t.is(maxOfThree(10, 3, 50), 50)
	t.is(maxOfThree(-1, -3, -10), -1)
	t.is(maxOfThree('aaa', 0, 1), 1)
	t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', t => {
	t.is(sum(8, 11), 19)
	t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
	t.is(sumOfArray([1, 2]), 3)
	t.is(sumOfArray([1, 2, 3]), 6)
	t.is(sumOfArray([10, 9, 8]), 27)
	t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
	t.is(isVowel(0), false)
	t.is(isVowel('B'), false)
	t.is(isVowel('b'), false)
	t.is(isVowel('a'), true)
	t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
	t.is(rovarspraket('a'), 'a')
	t.is(rovarspraket('b'), 'bob')
	t.is(rovarspraket('cat'), 'cocatot')
	t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
	t.is(rovarspraket(0), '0')
})

test('reverse()', t => {
	t.is(reverse('books'), 'skoob')
	t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
	t.is(findLongestWord('book dogs'), 'book')
	t.is(findLongestWord('life the universe and everything'), 'everything')
})
// from Code Wars
test('remove()', t => {
	t.is(remove('Hi!'), 'Hi!')
	t.is(remove('Hi!!!'), 'Hi!')
	t.is(remove('!Hi'), 'Hi!')
	t.is(remove('!Hi!'), 'Hi!')
	t.is(remove('Hi! Hi!'), 'Hi Hi!')
	t.is(remove('Hi'), 'Hi!')
})

test('alphabetWar()', t => {
	t.is(alphabetWar("z"), "Right side wins!")
	t.is(alphabetWar("zdqmwpbs"), "Let's fight again!")
	t.is(alphabetWar("zzzzs"), "Right side wins!")
	t.is(alphabetWar("wwwwww"), "Left side wins!")
})
test('findOutlier()', t => {
	t.is(findOutlier([0, 1, 2]), 1)
	t.is(findOutlier([1, 2, 3]), 2)
	t.is(findOutlier([2, 6, 8, 10, 3]), 3)
	t.is(findOutlier([0, 0, 3, 0, 0]), 3)
	t.is(findOutlier([1, 1, 0, 1, 1]), 0)
})

test('longest()', t => {
	t.is(longest("aretheyhere", "yestheyarehere"), "aehrsty")
	t.is(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
	t.is(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})

test("smallEnough()", t => {
	t.is(smallEnough([66, 101], 200), true);
	t.is(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
	t.is(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
	t.is(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
})

test("largestArrangement()", t => {
	t.is(largestArrangement([8, 6, 590, 70]), 8706590)
	t.is(largestArrangement([6, 73, 79, 356, 7]), 797736356)
	t.is(largestArrangement([64, 29, 5, 9, 982, 3]), 9982645329)
	t.is(largestArrangement([3487, 103559, 243]), 3487243103559)
	t.is(largestArrangement([7, 78, 79, 72, 709, 7, 94]), 9479787772709)
})
/* eslint-enable */
