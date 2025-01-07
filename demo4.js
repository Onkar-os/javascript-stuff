let a=prompt("enter a first number")
let b=prompt("enter a second number")
let oprt=prompt("enter a operator")
a=Number(a)
b=Number(b)
let result
if(oprt=="+"){
    result=a+b
    document.write(result)
}
if(oprt=="-"){
    result=a-b
    document.write(result)
}
if(oprt=="*"){
    result=a*b
    document.write(result)
}
if(oprt=="/"){
    result=a/b
    document.write(result)
}
if(oprt == "**"){
    result=a**b
    document.write(result)
}