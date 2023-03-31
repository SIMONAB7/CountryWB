const windows = document.querySelector(".window");
const student = document.querySelector(".students");
const activeStu = document.querySelector(".activeStudent");
const stu1 = document.querySelector("#student_1");
const stuBtn = stu1.querySelector(".student_btn");
const exBtn = activeStu.querySelector(".ex");
const activeStuImg = activeStu.querySelector(".image");
const activeStuTxt = activeStu.querySelector(".text");

stuBtn.onclick = ()=> {
    windows.classList.add("activeInfo");
    activeStu.classList.add("activeInfo");
    exBtn.style.visibility = 'visible';

    getStudent(stu1);
}

exBtn.onclick = ()=> {
    windows.classList.remove("activeInfo");
    activeStu.classList.remove("activeInfo");
    exBtn.style.visibility = 'hidden';
    activeStuImg.style.visibility = 'hidden';
    activeStuTxt.style.visibility = 'hidden';
}

function getStudent(student){
    const stuImg = student.querySelector("#image1").getAttribute("src");
    // const stuImgAlt = student.getElementById("image1").getAttribute("alt");
    const name = student.querySelector(".student_btn").innerHTML;
    

    let imgHTML = '<img src="' + stuImg + '" alt="hello">';
    activeStuImg.innerHTML = imgHTML;
    activeStuImg.style.visibility = 'visible';

    activeStuTxt.innerHTML = name;
    activeStuTxt.style.visibility = 'visible';
}
