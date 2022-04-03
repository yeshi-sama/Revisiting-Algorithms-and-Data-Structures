using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");

class Solution {
    public int[] solution(int[] A, int K) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        // Console.WriteLine("Given Array is"); 
        // string Original_array = string.Join(" ", A); 
        // Console.WriteLine(Original_array); 
        if(A.Length == 0) return A;
        
        while(K > 0) {
            rotate(A);
            K--; 
        }
          
        // Console.WriteLine("Rotated Array is"); 
        // string Rotated_array = string.Join(" ", A); 
        // Console.WriteLine(Rotated_array); 
        return A;
    }
      
    // Method for rotation 
    // 
    static void rotate(int[] arr) 
    { 
        // store the last element in the array
        int x = arr[arr.Length - 1], i; 
        
        // loop starts from last element of the array
        // set the element to the next one
        for (i = arr.Length - 1; i > 0; i--) 
            arr[i] = arr[i-1]; 
            
        
        // by now the arr has shifted by one
        // except the last element still needs to be in place
        arr[0] = x; 
    } 
}
