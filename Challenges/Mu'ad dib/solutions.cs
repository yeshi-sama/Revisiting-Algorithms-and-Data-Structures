using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        int res = MinCost(A, 0);
        res = Math.Min(res, 25); //for buying a ticket for the whole month
        return res;
    }

    private int MinCost(int[] A, int index) {
        if(index >= A.Length) return 0;
        
        int sevenDayIndex = 0;
        int sevenDayCost = 0;
        int oneDayCost = 0;

        // 1. Find the One Day Ticket cost through recursion (adds by 1)
        oneDayCost = 2 + MinCost(A, index + 1);

        // 2. Find the 7th day indexes (compares sevendayindex value with this.index value + 6)
        sevenDayIndex = index + 1;
        while(sevenDayIndex < A.Length && A[sevenDayIndex] <= A[index] + 6) 
            sevenDayIndex ++;
        
        // 3. Find the Seven Days Ticket cost through recursion (adds by 7)
        sevenDayCost = 7 + MinCost(A, sevenDayIndex);

        return Math.Min(oneDayCost, sevenDayCost);
    }
}
