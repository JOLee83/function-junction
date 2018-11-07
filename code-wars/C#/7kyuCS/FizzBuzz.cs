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