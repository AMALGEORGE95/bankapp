class Bank{
    createAccount(){
        let p_name=name1.value
        let account_number=accno.value
        let balance=Balance.value
        let password=pass.value
        let user={
            p_name,account_number,password,balance
        }
        localStorage.setItem(account_number,JSON.stringify(user))
        alert("account has been created sucessfully")
        location.href="\loginbank.html";
      
    }
    authenticate()
    {
        let account_number=accno.value
        let password=pass1.value
        if (account_number in localStorage)
        {
            let user=JSON.parse(localStorage.getItem(account_number))
            if(user.password==password && user.account_number==account_number)
            {
                alert("login successful")
                sessionStorage.setItem(account_number,JSON.stringify(user))
                location.href="bankhome.html";
            }
            else
            {
                alert("invalid credentials")
            }

        }
        else
        {
            alert("invalid")
        }
    }
    logout(){
        sessionStorage.clear();
        
    }
    balanceenq(){
        let data=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`avl bal ${data.balance}`)
    }
    fundTransfer(){
        let to_acno=toacno.value
        let amount=amt.value
        if(to_acno in localStorage)
        {
            let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            if(user.balance>=amount)
            {
                let user1=JSON.parse(localStorage.getItem(to_acno))
                let user2=JSON.parse(localStorage.getItem(user.account_number))
                let bal=Number(user1.balance )+Number(amount)
                user1.balance=bal
                user2.balance-=amount
                localStorage.setItem(user1.account_number,JSON.stringify(user1))
                localStorage.setItem(user2.account_number,JSON.stringify(user2))
                user.balance-=amount
                sessionStorage.setItem(user.account_number,JSON.stringify(user))


            }
            else{
                alert("insufficient balance")
            }
            

        }
        else
        {
            alert("invalid transaction")
        }
    }
    
   
}
var bank=new Bank()

