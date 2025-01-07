let basicsalary=Number(prompt("Enter the basic salary"))
let hra
let da
let grosssalary
if(basicsalary <= 10000){
        hra=basicsalary*0.80
        da=basicsalary*0.20

        grosssalary=basicsalary + hra + da
        document.write("grosssalary is:"+grosssalary)
}
if(basicsalary <= 20000 && basicsalary>10000){
    hra=basicsalary*0.25
    da=basicsalary*0.90

    grosssalary=basicsalary + hra + da
    document.write("grosssalary is:"+grosssalary)
}
else if(basicsalary > 20000){
    hra=basicsalary*0.30
    da=basicsalary*0.95
   
    grosssalary=basicsalary + hra + da
    document.write("grosssalary is:"+grosssalary)
}

