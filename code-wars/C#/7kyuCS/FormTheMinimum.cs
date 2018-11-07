using System;
using System.Linq;
class Kata
{
  public static long MinValue(int[] a)
  {
    return long.Parse(String.Join("", a
     .OrderBy(o => o)
     .Distinct()));
  }
}