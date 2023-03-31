const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const sect = quiz_box.querySelector("section");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_sec");
info_box.classList.add("activeInfo");

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuestions(0); 
    questionCount(1); 
    startTimer(); 
}

let time =  59;
let timeSpent = 0;
let question_count = 0;
let questionNum = 1;
let score = 0;
let counter;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    time = 60; 
    timeSpent = 0;
    question_count = 0;
    questionNum = 1;
    score = 0;
    showQuestions(question_count); 
    questionCount(questionNum); 
    clearInterval(counter); 
    startTimer();
    timeText.textContent = "Time Left"; 
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const bottom_ques_counter = document.querySelector("footer .question_num");

function showQuestions(index){
    const quiz_questions = document.querySelector(".quiz_question");

    let que_tag = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
    let que_img = sect.querySelector(".question_img");

    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    quiz_questions.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    que_img.style.backgroundImage = "url(" + questions[index].img + ")";
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fa fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fa fa-times"></i></div>';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function optionSelected(answer){
    let userAns = answer.textContent; 
    let correcAns = questions[question_count].answer; 
    const allOptions = option_list.children.length; 
    if(userAns == correcAns){ 
        score += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }

    await sleep(1000);

    if(question_count < questions.length - 1){ 
        question_count++;
        questionNum++; 
        showQuestions(question_count);
        questionCount(questionNum); 
    }else{
        clearInterval(counter); 
        showResult(); 
    }
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    const timeSpentText = result_box.querySelector(".time_spent_text");
    if (score > 7){
        let scoreTag = '<span>You scored '+ score +' out of '+ questions.length +'</span>';
        
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = 'green';
        
    }
    else if(score > 4){
        let scoreTag = '<span>You scored '+ score +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = '#f0ba08';
    }
    else{
        let scoreTag = '<span>You scored '+ score +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
        scoreText.style.color = 'red';
    }

    if (timeSpent < 60) {
        let timeSpentTag = '<span>You took ' + timeSpent + ' seconds to complete the quiz.</span>'
        timeSpentText.innerHTML = timeSpentTag;
    }
    else {
        let timeSpentTag = '<span>You ran out of time!</span>'
        timeSpentText.innerHTML = timeSpentTag;
    }

}

function startTimer(){
    counter = setInterval(timer, 1000);
}

function timer(){
    timeCount.textContent = time; 
    time--; 
    timeSpent++;
    if(time < 0){  
        clearInterval(counter);
        showResult();
    }
}

function questionCount(index){
    let questionNumber = '<span><p>Question Number: ' + index + '</p></span>';
    bottom_ques_counter.innerHTML = questionNumber;  
}