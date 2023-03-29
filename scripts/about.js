const windows = document.querySelector(".window");
const student = document.querySelector(".students");
const stuDiv = student.querySelector("div");
const activeStu = document.querySelector(".activeStudent");
const stu1 = document.querySelector("#student_1");
const stu2 = document.querySelector("#student_2");
const stuImg = stu1.querySelector("#image1");
const activeStuTxt = activeStu.querySelector(".text");

stu1.addEventListener("mouseover", autoOver);
stu1.addEventListener("mouseout", autoOut);

function autoOver() {
    // this.querySelector("#image1").style.height = "250px";
    stu1.style.height = "400px";
    stu1.style.transition = "0.3s ease";
    
}

function autoOut() {
    this.style.height = "320px";
}


// function getStudent(student){
//     const stuImg = student.querySelector("#image1").getAttribute("src");
//     // const stuImgAlt = student.getElementById("image1").getAttribute("alt");
//     const name = student.querySelector(".student_btn").innerHTML;
    

//     let imgHTML = '<img src="' + stuImg + '" alt="hello">';
//     activeStuImg.innerHTML = imgHTML;
//     activeStuImg.style.visibility = 'visible';

//     activeStuTxt.innerHTML = name;
//     activeStuTxt.style.visibility = 'visible';
// }
