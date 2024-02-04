/*
    JS is Single Threaded.

    Javascript Execution Context
    1. Global Execution/Environment Context => here the 'this' keyword is used.
    2. Function/Funtional Execution Context => 
    3. Eval Execution Context => Used is Mongoose. It is the property of global object.

    Code is executed in two phase.
    1. Global Execution => Creates the 'this' keyword
    2. Memory Creation Phase/Creation Phase => Allocate the space eg. let result = undefined (if you declare the variable and assign but in actual memory creation phase assign undefined )
    3. Execution Phase => Actual Execution start in this phase. Assign the value to the variable.

    eg. Step 1 : Assign the function as defination
        Step 2 : When function is called it create another New Executional Context called sandbox(in sandbox their is new variable environment and thread is created)
        Step 3 : In Sandbox Again it create the memory creation phase and execution phase
        Step 4 : After execution it delete the sandbox
*/
/*
Call Stack 
Suppose we have 3 function as one(), two() and three() and call accordingly.
In stack one() goes execute and pop from stack and so on. 
*/