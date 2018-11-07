using System;
public class Kata
{
  public static string Remove(string s)
  {
    //     s = s.Replace("!", String.Empty);
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