/*
      To compare one algorithm to another or to evaluate the performance of a single algorithm

         -time complexity
         -space complexity
     
      time complexity = the amount of time taken by an algorithm to run
      space complexity = the amount of memory taken by an algorithm to run 
    
  Example 1:

   for(i=0;i<N;i++){       >>>>>> This will be executed N times
    a=a+1;                 >>>>> Everything inside a loop will be taken as one time Execution (no need to worry ignore)
   }

   for(j=0;j<M;j++){       >>>>> This will be executed M times
    b=b+1;
   }


     Total time complexity T(N,M) = N + M
                               = O(N + M)

  Example 2:
   
   for(i=0;i<N;i++){
    a=a+1;
   }
   for(j=0;j<2N;i++){
    b=b+1;
   }

   Total time complexity = N + 2N
                         = 3N
                         = O(N)            >>>>  The 3 before N should need to be removed here

   
  Example 3:
   let a=0, b=0;
    for(i=0; i<N; i++){          Nested loop
        a=a+1;
        for(j=0; i<N; j++){
            b=b+1
        }
    }
    
    Answer:
    Step 1: Make an assumption

    In this case you should make an assumption to find the Time complexity
    If N=2
     i=0; j= 0 , 1  >> 2 times execution
     i=1; j= 0 , 1  >> 2 times executions

     total executions = 2 + 2
                      = 4
      
    If N=3
       i=0; j= 0 , 1 , 2 >> 3 times
       i=1; j= 0 , 1 , 2 >> 3 times
       i=2; j= 0 , 1 , 2 >> 3 times
       
       tatal executions = 3 + 3 + 3
                        = 9
          
    If N=4
        i=0; j= 0 , 1 , 2 , 3  >> 4 times
        i=1; j= 0 , 1 , 2 , 3  >> 4 times
        i=2; j= 0 , 1 , 2 , 3  >> 4 times
        i=3; j= 0 , 1 , 2 , 3  >> 4 times
        
       total executions =  4 + 4 + 4 + 4
                        = 16


    Step 2: Summarize & pattern identifications

    For N = 2, executions = 4
    For N = 3, executions = 9
    For N = 4, executions = 16

    Now it looks like a square executions
    So
         
       executions = N^2
       
     Step 3 : Total time complexity = 1 + N^2
                                    = O(N^2)

  Example 4:

    Let a = 0;
      for(i=0; i < N; i++){
        for(j=N;j>i;j--){
            a=a + i + j;
         }
      }


    Step 1 : Make an assumption
    IF N = 3
     i = 0; j = 3 , 2 , 1  >> 3 times
     i = 1; j = 3 , 2      >> 2 times
     i = 2; j = 3          >> 1 time
    
     Total executions = 3 + 2 + 1
                      = 6

    IF N = 4
     i = 0; j = 4 , 3 , 2 , 1  >> 4 times
     i = 1; j = 4 , 3 , 2      >> 3 times
     i = 2; j = 4 , 3          >> 2 times
     i = 3; j = 4              >> 1 time
     
      Total executions = 4 + 3 + 2 + 1
                       = 10
                       
    IF N = 5
     i = 0; j = 5 , 4 , 3 , 2 , 1  >> 5 times
     i = 1; j = 5 , 4 , 3 , 2      >> 4 times
     i = 2; j = 5 , 4 , 3          >> 3 times
     i = 3; j = 5 , 4              >> 2 time
     i = 4; j = 5                  >> 1 time
     
       Total executions = 5 + 4 + 3 + 2 + 1
                        = 15


    Step 2 : Summarize & identify pattern
     
       For N = 3 , executions = 6
       For N = 4 , executions = 10
       For N = 5 , executions = 15

       executions = sum of first natural numbers
                  = N + N-1 + N-2 + N-3 + ..... +1
                  = [N * (N+1)] / 2
       
    Step 3 : Total time complexity 
       
          T(N) = 1 + [N * (N+1)] / 2
               = 1/2 * [N * (N+1)]
               = N^2 + N
               = N^2 [N^2 is the highest polynomial so we ignore the other ""N""]
               = O(N^2)


   Example 5 :
     
      let i , j , k = 0;
      for(i = N/2; i<=N; i++){
        for(j = 2; j<=N; j = j * 2){
            k = k + N/2;
        }
      }

    Step 1: Make an assumption 
     
     Outer loop
       IF N = 6 , i = 3 , 4 , 5, 6;   >> 4 execut
       IF N = 5 , i = 2.5 , 3.5 , 4.5;  >> 3 execut
       IF N = 4 , i = 2 , 3 , 4;       >> 3 execut

          executions  = N/2 + 1

     Inner loop
        IF N = 10  j = 2 , 4 , 8   >> 3 execut
        IF N = 20  j = 2 , 4 , 8 , 16 >> 4 execut
        IF N = 25  j = 2 , 4 , 8 , 16 >> 4 execut
        IF N = 35  j = 2 , 4 , 8 , 16 , 32 >> 5 execut

            2^X = N , X is unknown , solve X ?
             
            Apply log2 on both sides 

             log2(2^X) = log2(N)
             X log2(2) = log2(N)                [since logA(B^x) = x logA(B)]
             X * 1 = log2(N)                    [since logA(A) = 1]
             X = log2(N)

             executions = logN

      total time complexity  = (N/2 + 1) *  logN        >>> we remove 1/2 , 1
                             = N/2 * logN + logN      
                             = 1/2 * N * logN + logN
                             = N logN + logN         >> here we take only higher ones like we take 2^3 from (2 , 2^2 , 2^3)
                             = O(N logN)     



*/

// console.log(`N = 10 , executions = ${Math.log2(10)}`);
// console.log(`N = 20 , executions = ${Math.log2(20)}`);
// console.log(`N = 25 , executions = ${Math.log2(25)}`);
// console.log(`N = 35 , executions = ${Math.log2(35)}`);


/*
       Tip for Time complexity 



       IF a loop executes from 1 to N then it is N  >> O(N)
       N/2 to N  >> N/2 + 1 >> O(N/2)    [we remove 1 (everynumber in this case )]


       For O(logN)

          if loop goes like this then it is log(N)
         >> 2 , 4 , 8 , 16 , 32  (Multiples of 2 )
         >> 3 , 9 , 27 , 81 243  (Multiples of 3)
         >> 243 , 81 , 27 , 9 , 3 (either incresed or decresed)


         For O(2^N)
           
           Given an array of values, how many ways can we select the values from the array and print each way separately

           Input [1,2,3,4]
           Output 
             
               0 values ();
               1 values (1),(2),(3),(4)
               2 values (1,2),(1,3),(1,4),(2,3),(2,4),(3,4)
               3 values (1,2,3),(1,2,4),(1,3,4),(2,3,4)
               4 values (1,2,3,4)
               executions = 16


         For O(N!)
         
             given a strings S, find how many ways can we rearrange to form a new string
             
            Input : abc
            Output
            
                 abc
                 acb
                 bac
                 bca
                 cab
                 cba
                  
                 executions = 6    3! = 3*2*1 = 6


             Input : ab
             Output    

                   ab
                   ba
                   executions = 2

              Input : abcd
              Output 
              
                   abcd
                   abdc
                   acbd
                   acdb
                   adbc
                   adcb
                   bacb
                   badc
                   bcad
                   bcda
                   bdac
                   bdca
                   cabd
                   cadb
                   cbad
                   cbda
                   cdab
                   cdba
                   dabc
                   dacb
                   dbcd
                   dbdc
                   dcab
                   dcba
                   executions = 24    4! =  4*3*2*1 = 24


                Types of time complexity least to highest
                
                O(1)
                O(logN)
                O(N)
                O(N logN)
                O(N^2)
                O(N^2 logN)
                O(N^3)
                O(N^3 logN)
                O(2^N)
                O(N!)


            
*/     

