let a=prompt("enter a number");
document.write("The given number ="+a+":")

let palindrome=(a)=>{
    var temp=a;
    var b;
    var result=0;


    while(a>0){
        b=a%10;
        a=parseInt(a/10);
        result=result*10+b
    }

    if(temp==result){
        document.write("It is palindrome");
    }

    else{
        document.write("It is not palindrome");
    }

}

palindrome(a);