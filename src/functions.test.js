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

var sum_pairs = function (ints, s) {
	let answer;
	let newLength;
	for (let i = 0; i < ints.length; i++) {
		for (let k = i + 1; k < ints.length; k++) {
			if (ints[i] + ints[k] == s) {
				if (answer == null) {
					answer = ints.filter(int => int === ints[i] || int === ints[k])
					newLength = ints[i] - ints[k]
				}
				if (answer != null && newLength > ints[i] - ints[k]) {
					answer = ints.filter(int => int === ints[i] || int === ints[k])
				}
			}
		}
	}
	console.log(answer)
	if (answer) {
		return answer
	} else {
		return undefined
	}
}
/*
l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

Test.describe("Testing For Sum of Pairs", function(){
Test.expect(sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
Test.expect(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
Test.expect(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
Test.expect(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
Test.expect(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
Test.expect(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
Test.expect(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
Test.expect(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
});*/
function moveTen(s) {
	return s.split("").map(x => {
		let y = x.charCodeAt() + 10
		if (y < 123) {
			return String.fromCodePoint(y)
		} else {
			return String.fromCodePoint(y - 26)
		}
	}).join("")
}
function prettyTimeFormat(seconds) {
	if (seconds < 60) {
		return Math.floor(seconds).toString()
	}
	if (seconds < 3600) {
		let sec = ("0" + (seconds % 60)).slice(-2)
		let min = Math.floor(seconds / 60)
		return `${min}:${sec}`
	}
	if (seconds >= 3600) {
		let hr = Math.floor(seconds / 3600)
		let min = ("0" + Math.floor((seconds - (3600 * hr)) / 60)).slice(-2)
		let sec = ("0" + Math.floor(seconds - (hr * 3600) - (min * 60))).slice(-2)

		return `${hr}:${min}:${sec}`
	}
	function prettyTimeFormat(seconds) {
		if (seconds < 60) {
			return Math.floor(seconds).toString()
		}
		if (seconds < 3600) {
			let min = Math.floor(seconds / 60)
			let sec = ("0" + Math.floor(seconds - (min * 60))).slice(-2)

			return `${min}:${sec}`
		}
		if (seconds >= 3600) {
			let hr = Math.floor(seconds / 3600)
			let min = ("0" + Math.floor((seconds - (3600 * hr)) / 60)).slice(-2)
			let sec = ("0" + Math.floor(seconds - (hr * 3600) - (min * 60))).slice(-2)

			return `${hr}:${min}:${sec}`
		}
	}

	function XO(str) {
		let xc = 0
		let oc = 0
		str.split("").map(a => {
			if (a === "x" || a === "X") {
				xc++
			}
			if (a === "o" || a === "O") {
				oc++
			}
		})
		if (xc === oc) {
			return true
		} else {
			return false
		}
	}

	function abbrevName(name) {
		let names = name.split(' ')
		let FI = names[0].split('')
		let LI = names[1].split('')
		return `${FI[0].toUpperCase()}.${LI[0].toUpperCase()}`
	}
	function findShort(s) {
		let str = s.split(' ')
		let shortest = 20
		let word = null
		for (let i = 0; i <= str.length - 1; i++) {
			if (shortest > str[i].length) {
				shortest = str[i].length
			}
		}
		return shortest
	}
	function trouble(x, t) {
		for (let i = 0; i < x.length; i++) {
			let k = i + 1
			if (x[i] + x[k] === t) {
				x.splice(k, 1)
				i--
			}
		}
		return x
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
	test("moveTen()", t => {
		t.is(moveTen("testcase"), "docdmkco");
		t.is(moveTen("codewars"), "mynogkbc");
		t.is(moveTen("exampletesthere"), "ohkwzvodocdrobo");
	});
	test("Pretty Time Formatter()", t => {
		t.is("should work for 0", function () {
			Test.assertEquals(prettyTimeFormat(0), "0", "Should return \"0\"");
		});
		t.is("should work for floats and should floor them", function () {
			Test.assertEquals(prettyTimeFormat(1.8342), "1", "Should return \"1\"");
		});
		t.is("should work for seconds under 60", function () {
			Test.assertEquals(prettyTimeFormat(50), "50", "Should return \"50\"");
		});
		t.is("should work for seconds under 10", function () {
			Test.assertEquals(prettyTimeFormat(9), "9", "Should return \"9\"");
		});
		t.is("should work for float values", function () {
			Test.assertEquals(prettyTimeFormat(9.8), "9", "Should return \"9\"");
		});
		t.is("should work for single-digit minutes", function () {
			Test.assertEquals(prettyTimeFormat(90), "1:30", "Should return \"1:30\"");
		});
		t.is("should work for double-digit minutes", function () {
			Test.assertEquals(prettyTimeFormat(1989), "33:09", "Should return \"33:09\"");
		});
		t.is("should work for single-digit hours", function () {
			Test.assertEquals(prettyTimeFormat(14989), "4:09:49", "Should return \"4:09:49\"");
		});
		t.is("should work for double-digit hours", function () {
			Test.assertEquals(prettyTimeFormat(84989), "23:36:29", "Should return \"23:36:29\"");
		});
		t.is("should work for hours greater than 24 and digits greater than 2", function () {
			Test.assertEquals(prettyTimeFormat(5114989), "1420:49:49", "Should return \"1420:49:49\"");
		});
	});
	test("XO()", t => {
		t.is('xo'), true);
	t.is("xxOo"), true);
	t.is("xxxm"), false);
	t.is("Oo"), false);
	t.is("ooom"), false);
});

test("abbrevName()", t => {
	t.is(abbrevName("Sam Harris"), "S.H");
	t.is(abbrevName("Patrick Feenan"), "P.F");
	t.is(abbrevName("Evan Cole"), "E.C");
	t.is(abbrevName("P Favuzzi"), "P.F");
	t.is(abbrevName("David Mendieta"), "D.M");
})
test("findShort()", t => {
	t.is(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
	t.is(findShort("turns out random test cases are easier than writing out basic ones"), 3);
});

test("trouble()", t => {
	t.is(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
	t.is(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
	t.is(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
});
/* eslint-enable */
