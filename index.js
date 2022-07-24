const msg =document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const gameArea = document.querySelector('.gameArea');
const validationField = document.querySelector('.validationField');
let play =false;
let newWords = "";
let randWords = "";
let sWords =["python", "javascript", "react", "java", "php", "mongodb", "sql", "node", "express", "angular"];

const createNewWords = () =>{
    let ranNum = Math.floor(Math.random() * sWords.length)
    // console.log(ranNum)

    let newTempSwords = sWords[ranNum];
    // console.log(newTempSwords.split(""))
    return newTempSwords;
}

const scrambleWords = (arr) =>{
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i]
        // console.log(temp);
        let j = Math.floor(Math.random() * (i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j]
        arr[j] = temp;
    }
    return arr;
}

function changeBackground(color) {
    document.getElementById("gameArea").style.backgroundColor = color;
  }

  
document.getElementById("myInput").addEventListener('keypress', updateValue);

function updateValue(e) {

    const result=document.getElementById('error').className

    if(result== "show")
    {
        document.getElementById('error').className = "hidden";
    }

}

btn.addEventListener('click',myFunction = () => {




    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
       newWords = createNewWords();
       randWords = scrambleWords(newWords.split("")).join("");
       if(guess.value == "")
       {
    changeBackground("#2ed573")
       }

 


    //    console.log(randWords.join(""));
       msg.innerHTML =`Guess the word: ${randWords}`;
    }else{
        let tempWord = guess.value;


        if(tempWord == ""){
            document.getElementById('error').className = "show";
            
        }

        else{


         


            
            if (tempWord === newWords){
                play = false;
                msg.innerHTML = `awesome its correct. it is ${newWords}`;
                btn.innerHTML = "Start Again";
                guess.classList.toggle('hidden');
                guess.value = "";
            }


            
                if(tempWord != newWords){
          
                play =false
                changeBackground("red")
                msg.innerHTML = `Sorry try again ${randWords}`;
                guess.classList.toggle('hidden');
                btn.innerHTML = "Sorry try Again";
                guess.value = "";
                document.getElementById('error').className = "hidden";
           
               
               
        }

        


     
            }



        
        
       
      
     
    }

})

