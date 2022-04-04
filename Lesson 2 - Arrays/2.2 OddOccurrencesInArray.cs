using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        // memoization
        int arrLength = A.Length;
        if(arrLength == 1) return A[0];

        // Sort the Array
        Array.Sort(A);     
        for (int i = 0; i < arrLength; i++) {
            // If index is odd then continue
            if (i % 2 != 0) continue; 
            
            // If last index then return this element
            if (i + 1 == arrLength) return A[i]; 
            
            // If the next index is not equal to current index then we have found the unpaired element
            if (A[i] != A[i+1]) return A[i]; 
        }
        return 0;
    }
}
