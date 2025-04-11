const theProblem = document.querySelector(".the_problem");
const number1 = document.querySelector(".number_1");
const number2 = document.querySelector(".number_2");
const result = document.querySelector(".result");
const inputResult = document.querySelector(".input_result");
const btnSubmit = document.querySelector(".btn_submit");
const petLv = document.querySelector(".pet_lv");
const imgPetLv = document.querySelector(".img_pet-lv");
// radom
let sum;
let level = 1;

function radomLv1() {
    const randomNum1 = Math.floor(Math.random() * 9);
    const randomNum2 = Math.floor(Math.random() * 9);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}

function radomLv2() {
    const randomNum1 = Math.floor(Math.random() * 99);
    const randomNum2 = Math.floor(Math.random() * 99);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}

function radomLv3() {
    const randomNum1 = Math.floor(Math.random() * 999);
    const randomNum2 = Math.floor(Math.random() * 999);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}
function radomLv4() {
    const randomNum1 = Math.floor(Math.random() * 9999);
    const randomNum2 = Math.floor(Math.random() * 9999);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}
function radomLv5() {
    const randomNum1 = Math.floor(Math.random() * 99999);
    const randomNum2 = Math.floor(Math.random() * 99999);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}

function radomLv6() {
    const randomNum1 = Math.floor(Math.random() * 999999);
    const randomNum2 = Math.floor(Math.random() * 999999);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}
function radomLv7() {
    const randomNum1 = Math.floor(Math.random() * 9999999);
    const randomNum2 = Math.floor(Math.random() * 9999999);
    number1.textContent = `${randomNum1}`;
    number2.textContent = `${randomNum2}`;
    sum = randomNum1 + randomNum2;
}
function loadLevel(lv) {
    switch (lv) {
        case 1:
            radomLv1();
            break;
        case 2:
            radomLv2();
            break;
        case 3:
            radomLv3();
            break;
        case 4:
            radomLv4();
            break;
        case 5:
            radomLv5();
            break;
        case 6:
            radomLv6();
            break;
        case 7:
            radomLv7();
            break;
        default:
            radomLv1(); // Mặc định là level 1 nếu không đúng level
            break;
    }
}

// Load câu đầu tiên
loadLevel(level);

const handleInputResult = () => {
    if (!inputResult.value) {
        alert("bạn chưa nhập dữ liệu");
        return;
    }

    if (parseInt(inputResult.value) === sum) {
        result.textContent = `${sum}`;
        alert("chính xác");
        level++;
        petLv.innerHTML = `<img src="./assets/imgs/lv${level}.png" alt="" />`;
        if (level == 7) {
            alert("cũng kinh đấy");
        }
        loadLevel(level);
        inputResult.value = ""; // Reset ô input
        result.textContent = "?";
    } else {
        alert("sai r làm lại đi");
    }
};

btnSubmit.addEventListener("click", handleInputResult);
