
using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    // given positive integer N
    // return the length of its longest binary gap
    public int solution(int N) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        String strBinary = Convert.ToString(N,2);
        int intBinaryGap = getBinaryGap(strBinary);  
        return intBinaryGap;
    }

    public int getBinaryGap(String strBinary) {
        int largetGap = 0;
        int tempGap = 0;
        foreach(char c in strBinary) {
            if(c == '1') {
                if (tempGap >= largetGap) {
                    largetGap = tempGap;
                }
                tempGap = 0;
            } else {
                tempGap ++;
            }
        }

        return largetGap;
    }
}
