
let sum= 0
let hasbj = false
let isalive= false
let msg=" "
let ca=0
let cards=[]
let msgEl=document.getElementById("msg-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let play={
     nam:"Per",
     chips:145
}
let playEl=document.getElementById("play-el")
playEl.textContent = play.nam + " : $"+play.chips
function start()
{
    cards=[]
    sum=0
    isalive=true
    let fc =getrandomcard()
    let sc =getrandomcard()
    cards=[fc,sc]
    sum=fc+sc 
    rendergame()
}
function rendergame()
{
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i+=1)
        {
            cardEl.textContent+=cards[i]+" "
        }
        
    sumEl.textContent = "Sum: " + sum
    if(sum < 21)
        {
            msg="wanna draw another card"
    
        }
    else if(sum == 21)
        {
            msg="you won"
            hasbj=true
        }
        else
        {
            msg="oops lost"
            isalive=false
        }
        msgEl.textContent=msg
    
}
 function newcard()
 {
    if(isalive==true && hasbj==false)
        {
        ca=getrandomcard()
        sum+=ca
        cards.push(ca)
        rendergame()
        }
     else{
        msgEl.textContent="you are out "
     }
 }
function getrandomcard(){
    let r=Math.random()*13
    let t=Math.floor(r)
    if(t===1)
        {
            return 11
        }
    else if(t>10)
    {
        return 10
    }
    else{
        return t
    }
}














