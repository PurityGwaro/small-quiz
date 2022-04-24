//an array of 4 values and in each we're going to store either A or B
const correctAnswers = ['B','A','B','B'];
//we shall compare the user answers to this
//query the form
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');
//console.log(result);

//listen for the submit
form.addEventListener('submit', e =>{
    e.preventDefault();//prevent default action of the submit event which is to refresh the page

    let score = 0;//default score value
    //finding out what the user answers are
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //compare them to the correct answers
    userAnswers.forEach((answer, index)=>{
        //if the answer is equal to the equivalent position in the array
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
//scroll the user to the top before outputting the score
    scrollTo(0,0);//takes two args, an x and y coordinate

    //show result on page,..changing d-none
   //result.style.display = 'block'; - this didn't work
   //result.querySelector('span').textContent = `${score}%`;//select the span tag inside the div tag
   result.classList.remove('d-none');//allowing it to display by removing the d-none class name

   //score animation - so that it increases the score slowly from 0- the score got
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }

    }, 20);

});


//window object- is the global object in frontend Js. It is the mother of all objects
//console.log('hello');//this is same as saying:
//window.console.log('hello');
//window.document.querySelector('.form');
//window.alert('hello);
//we don't need to write out window bcs its presence is inferred

//setTimeout()...takes a callback func and fires it after a set amount of time
//setTimeout(()=>{
//    alert('hello javascript');
//}, 3000);//3000 milliseconds-3secs

//method to use to scroll a user up to the top once they click on submit is called scrollTo()


