let a=prompt("enter a first number")
let b=prompt("enter a second number")
let opr=prompt("enter a operator")
a = Number(a);
b = Number(b);
let result
if(opr==="*")
    {
        if(a==45 && b==3){
        result=555
        document.write(' result is'+result )
        }
        else{
            result=a*b
            document.write(' result is'+result )
        }
        
    }
if(opr==="+")
{
    if(a==56 && b==9){
    result=77
    document.write(' result is'+result )
    }
    else{
        result=a+b
        document.write(' result is'+result )
    }
    
}
if(opr==="/")
    {
        if(a==56 && b==6){
        result=4
        document.write(' result is'+result )
        }
        else{
            result=a/b
            document.write(' result is'+result )
        }
        
    }

