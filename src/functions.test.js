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
	function check(a, x) {
		for (let i = 0; i < a.length; i++) {
			if (a[i] === x) {
				return true
			}
		}
		return false
	};
	function solution(str) {
		var result = 0
		// the result is now a number, not a string
		var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
		var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
		for (var i = 0; i <= decimal.length; i++) {
			while (str.indexOf(roman[i]) === 0) {
				//checking for the first characters in the string
				result += decimal[i];
				//adding the decimal value to our result counter
				str = str.replace(roman[i], '')
				//remove the matched Roman letter from the beginning
			}
		}
		return result
	}

	function distinct(a) {
		let b = 0
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b) {
				a.splice(i, 1)
				i--
			}
			b = a[i]
		}
		return a
	}
	function maxNumber(n) {
		return parseInt(n.toString().split("").sort().reverse().join(""))
	}
	function makePassword(phrase) {
		return phrase.split(" ").map(p => {
			if (p[0] == "i" || p[0] == "I") {
				return "1"
			}
			if (p[0] == "s" || p[0] == "S") {
				return "5"
			}
			if (p[0] == "O" || p[0] == "o") {
				return "0"
			} else {
				return p[0]
			}
		}).join("")
	}
	const binaryArrayToNumber = arr => {
		return parseInt(arr.join(''), 2)
	};
	function oddOrEven(array) {
		return array.length === 0 ? 'even' :
			(array.reduce((accumulator, currentValue) =>
				accumulator + currentValue)) % 2 === 0 ? 'even' : 'odd'
	}
	function DNAStrand(dna) {
		return dna.split('').map(x => {
			return x === 'A' ? 'T' : x === 'T'
				? 'A' : x === 'G' ? 'C' : x === 'C'
					? 'G' : null
		}).join('')
	}
	function minValue(values) {
		let y
		return parseInt(values.sort().map(x => {
			if (y === null) {
				y = x
				return x
			}
			if (y === x) {
				return null
			} else {
				y = x
				return x
			}
		}).join(''), 10)
	}
	function vowelBack(s) {
		return s.split("").map(x => {
			let y = x.charCodeAt()
			if (y === 114 || y === 115 || 119 <= y && y <= 122) {
				return String.fromCodePoint(y - 17)
			}
			if (y === 99 || y === 111) {
				return String.fromCodePoint(y - 1)
			}
			if (y === 100 || y === 101) {
				return String.fromCodePoint(97)
			}
			if (y === 117) {
				return String.fromCodePoint(112)
			}
			if (y === 98 || 103 <= y && y <= 104 || 106 <= y && y <= 110 || 112 <= y && y <= 113) {
				return String.fromCodePoint(y + 9)
			}
			if (y === 97) {
				return String.fromCodePoint(118)
			}
			else {
				return String.fromCodePoint(y)
			}
		}).join("")
	}
	function inverseSlice(items, a, b) {
		let end = items.splice(b, items.length - 1)
		let start = items.splice(0, a)
		return start.concat(end)
	}
	function alphabetWar(fight) {
		let left = "sbpw"
		let right = "zdqm"
		let count = 0
		let prevCount = 0
		let skip = false
		fight.split("").map(x => {
			if (x === "*") {
				count = count - prevCount
				skip = true
				prevCount = 0
			}
			else if (skip === true) {
				skip = false
			}
			else if (left.includes(x)) {
				count = count + (left.indexOf(x) + 1)
				prevCount = (left.indexOf(x) + 1)
			}
			else if (right.includes(x)) {
				count = count - (right.indexOf(x) + 1)
				prevCount = -(right.indexOf(x) + 1)
			}
			else {
				prevCount = 0
				return
			}
		})
		function calculateTip(amount, rating) {
			return rating.toLowerCase() === 'terrible' ? 0 :
				rating.toLowerCase() === 'poor' ? Math.ceil(amount * .05) :
					rating.toLowerCase() === 'good' ? Math.ceil(amount * .1) :
						rating.toLowerCase() === 'great' ? Math.ceil(amount * .15) :
							rating.toLowerCase() === 'excellent' ? Math.ceil(amount * .2) :
								"Rating not recognised"
		}
		function calculate_total(subtotal, tax, tip) {
			return Math.round((subtotal + (subtotal * tax / 100) + (subtotal * tip / 100)) * 100) / 100
		}
		// ...



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
		test("prettyTimeFormat()", t => {
			t.is((0), "0");
			t.is(prettyTimeFormat(1.8342), "1");
			t.is(prettyTimeFormat(50), "50");
			t.is(prettyTimeFormat(9), "9");
			t.is(prettyTimeFormat(9.8), "9");
			t.is(prettyTimeFormat(90), "1:30");
			t.is(prettyTimeFormat(1989), "33:09");
			t.is(prettyTimeFormat(14989), "4:09:49");
			t.is(prettyTimeFormat(84989), "23:36:29");
			t.is(prettyTimeFormat(5114989), "1420:49:49");
		});
		test("XO()", t => {
			t.is(XO('xo'), true);
			t.is(XO("xxOo"), true);
			t.is(XO("xxxm"), false);
			t.is(XO("Oo"), false);
			t.is(XO("ooom"), false);
		})

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
		test("check()", t => {
			t.is(check([66, 101], 66), true);
			t.is(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
			t.is(check(['t', 'e', 's', 't'], 'e'), true);
			t.is(check(['what', 'a', 'great', 'kata'], 'kat'), false);
		})
		test("solution()", t => {
			t.is(solution("XII"), 12);
			t.is(solution("IX"), 9);
			t.is(solution("VM"), 995);
			t.is(solution("MMDLIX"), 2559);
		})
		test("distinct()", t => {
			t.is(distinct([1]), [1]);
			t.is(distinct([1, 2]), [1, 2]);
			t.is(distinct([1, 1, 2]), [1, 2]);
		})
		test("maxNumber()", t => {
			t.is(maxNumber(213), 321);
			t.is(maxNumber(7389), 9873);
			t.is(maxNumber(63792), 97632);
			t.is(maxNumber(566797), 977665);
			t.is(maxNumber(1000000), 1000000);
		});
		test("makePassword()", t => {
			t.is(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
			t.is(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");
		});
		test("binaryArrayToNumber()", t => {
			t.is(binaryArrayToNumber([0, 0, 0, 1]), 1);
			t.is(binaryArrayToNumber([0, 0, 1, 0]), 2);
			t.is(binaryArrayToNumber([1, 1, 1, 1]), 15);
			t.is(binaryArrayToNumber([0, 1, 1, 0]), 6);
		});
		test('Edge tests', t => {
			t.is(oddOrEven([0]), 'even')
			t.is(oddOrEven([1]), 'odd')
			t.is(oddOrEven([]), 'even')
			t.is(oddOrEven([0, 1, 5]), 'even')
			t.is(oddOrEven([0, 1, 3]), 'even')
			t.is(oddOrEven([1023, 1, 2]), 'even')
			t.is(oddOrEven([0, -1, -5]), 'even')
			t.is(oddOrEven([0, -1, -3]), 'even')
			t.is(oddOrEven([-1023, 1, -2]), 'even')
			t.is(oddOrEven([0, 1, 2]), 'odd')
			t.is(oddOrEven([0, 1, 4]), 'odd')
			t.is(oddOrEven([1023, 1, 3]), 'odd')
			t.is(oddOrEven([0, -1, 2]), 'odd')
			t.is(oddOrEven([0, 1, -4]), 'odd')
			t.is(oddOrEven([-1023, -1, 3]), 'odd')
		});
		test("DNAStrand()" t => {
			t.is(DNAStrand("AAAA"), "TTTT", "String AAAA is");
			t.is(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
			t.is(DNAStrand("GTAT"), "CATA", "String GTAT is");
		})

		test("minValue", t => {
			t.is(minValue([1, 3, 1]), 13);
			t.is(minValue([4, 7, 5, 7]), 457);
			t.is(minValue([4, 8, 1, 4]), 148);
			t.is(minValue([5, 7, 9, 5, 7]), 579);
			t.is(minValue([6, 7, 8, 7, 6, 6]), 678);
			t.is(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
			t.is(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
			t.is(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
			t.is(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
			t.is(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);
		});
		test("vowelBack()", t => {
			t.is(vowelBack("testcase"), "tabtbvba");
			t.is(vowelBack("codewars"), "bnaafvab");
			t.is(vowelBack("exampletesthere"), "agvvyuatabtqaaa");
		});
		test("inverseSlice()", t => {
			t.is(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
			t.is(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
			t.is(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide']);
		});
		test("alphabetWar()", t => {
			t.is(alphabetWar("z"), "Right side wins!");
			t.is(alphabetWar("****"), "Let's fight again!");
			t.is(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!");
			t.is(alphabetWar("zdqmwpbs"), "Let's fight again!");
			t.is(alphabetWar("zz*zzs"), "Right side wins!");
			t.is(alphabetWar("sz**z**zs"), "Left side wins!");
			t.is(alphabetWar("z*z*z*zs"), "Left side wins!");
			t.is(alphabetWar("*wwwwww*z*"), "Left side wins!");
		});
		test("calculateTip()", t => {
			t.is(calculateTip(20, "Excellent"), 4);
			t.is(calculateTip(26.95, "good"), 3);
		});
		test("calculate_total()", t => {
			t.is(calculate_total(5, 5, 10), 5.75);
			t.is(calculate_total(36.97, 7, 15), 45.10);
			t.is(calculate_total(0.00, 6, 18), 0.00);
			t.is(calculate_total(80.94, 0, 20), 97.13);
			t.is(calculate_total(54.96, 8, 0), 59.36);
		});