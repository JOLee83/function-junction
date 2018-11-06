public class Kata
{
  public static string Remove(string s)
  {
    return s.Remove("!", "") + "!";
  }
}

using System;
public class Kata
{
  public static string Remove(string s)
  {
    // s = s.Replace("!", String.Empty);
    var bangCounter = 0;
    foreach (var letter in s)
    {
      if (letter == '!')
      {
        bangCounter++;
      }
      else
      {
        bangCounter = 0;
      }
    }
    return s.Replace("!", String.Empty) + new String('!', bangCounter);
  }
}

namespace Solution
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test, Description("It should work for basic tests")]
    public void SampleTest()
    {
      Assert.AreEqual("Hi!", Kata.Remove("Hi!"));
      Assert.AreEqual("Hi!!!", Kata.Remove("Hi!!!"));
      Assert.AreEqual("Hi", Kata.Remove("!Hi"));
      Assert.AreEqual("Hi!", Kata.Remove("!Hi!"));
      Assert.AreEqual("Hi Hi!", Kata.Remove("Hi! Hi!"));
      Assert.AreEqual("Hi", Kata.Remove("Hi"));
    }
  }
}

using System;
using System.Collections.Generic;

public class FizzBuzz
{
  public static string[] GetFizzBuzzArray(int n)
  {
    var output = new List<string>();
    if (n <= 0)
    {
      throw new System.ArgumentOutOfRangeException();
    }
    for (int i = 1; i <= n; i++)
    {
      if (i % 3 == 0 && i % 5 == 0)
      {
        output.Add("FizzBuzz");
      }
      else if (i % 3 == 0)
      {
        output.Add("Fizz");
      }
      else if (i % 5 == 0)
      {
        output.Add("Buzz");
      }
      else
      {
        output.Add(i.ToString());
      }
    }
    return output.ToArray();
  }
}
using System;
using NUnit.Framework;

[TestFixture]
public class FizzBuzzTests
{
  [Test]
  public void FizzBuzzTest_0()
  {
    int input = 0;
    Assert.Throws<ArgumentOutOfRangeException>(() => FizzBuzz.GetFizzBuzzArray(input));
  }

  [Test]
  public void FizzBuzzTest_1()
  {
    int input = 1;
    string[] expected = { "1" };

    string[] actual = FizzBuzz.GetFizzBuzzArray(input);

    Assert.AreEqual(expected, actual);
  }

  [Test]
  public void FizzBuzzTest_3()
  {
    int input = 3;
    string[] expected = { "1", "2", "Fizz" };

    string[] actual = FizzBuzz.GetFizzBuzzArray(input);

    Assert.AreEqual(expected, actual);
  }

  [Test]
  public void FizzBuzzTest_5()
  {
    int input = 5;
    string[] expected = { "1", "2", "Fizz", "4", "Buzz" };

    string[] actual = FizzBuzz.GetFizzBuzzArray(input);

    Assert.AreEqual(expected, actual);
  }

  [Test]
  public void FizzBuzzTest_15()
  {
    int input = 15;
    string[] expected = { "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz" };

    string[] actual = FizzBuzz.GetFizzBuzzArray(input);

    Assert.AreEqual(expected, actual);
  }
}