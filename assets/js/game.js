const number1 = document.querySelector(".number_1");
const number2 = document.querySelector(".number_2");
const result = document.querySelector(".result");
const inputResult = document.querySelector(".input_result");
const btnSubmit = document.querySelector(".btn_submit");
const petLv = document.querySelector(".pet_lv");

const correctModal = document.querySelector(".correct-modal");
const closeModalBtn = document.querySelector(".close-modal");

const finishModal = document.querySelector(".finish-modal");
const restartBtn = document.querySelector(".restart-btn");

let correctResult;
let level = 1;

// Hàm tạo phép nhân
function generateMultiplication(level) {
    const multiplier = level;
    const multiplicand = Math.floor(Math.random() * 10) + 1;

    number1.textContent = `${multiplier}`;
    number2.textContent = `${multiplicand}`;
    correctResult = multiplier * multiplicand;
}

// Cập nhật ảnh thú cưng
function updatePetImage(level) {
    const currentLevel = Math.min(level, 9);
    petLv.innerHTML = `<img src="./assets/imgs/lv${currentLevel}.png" alt="Level ${currentLevel}" />`;
}

// Hiện modal đúng
function showCorrectModal() {
    correctModal.classList.remove("hidden");
}

// Ẩn modal đúng
function hideCorrectModal() {
    correctModal.classList.add("hidden");
}

// Hiện modal hoàn thành
function showFinishModal() {
    finishModal.classList.remove("hidden");
}

// Ẩn modal hoàn thành
function hideFinishModal() {
    finishModal.classList.add("hidden");
}

// Xử lý OK khi đúng
closeModalBtn.addEventListener("click", () => {
    hideCorrectModal();

    level++;
    if (level > 9) {
        showFinishModal();
        return;
    }

    updatePetImage(level);
    generateMultiplication(level);
    inputResult.value = "";
    result.textContent = "?";
});

// Xử lý khi hoàn thành tất cả (bấm Chơi lại)
restartBtn.addEventListener("click", () => {
    hideFinishModal();

    level = 1;
    updatePetImage(level);
    generateMultiplication(level);
    inputResult.value = "";
    result.textContent = "?";
});

// Kiểm tra kết quả
function handleInputResult() {
    if (!inputResult.value) {
        alert("Bạn chưa nhập kết quả!");
        return;
    }

    const userAnswer = parseInt(inputResult.value);

    if (userAnswer === correctResult) {
        result.textContent = `${correctResult}`;
        showCorrectModal();
    } else {
        alert("Sai rồi! Làm lại nhé!");
    }
}

// Sự kiện Enter
inputResult.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        handleInputResult();
    }
});

// Nút kiểm tra
btnSubmit.addEventListener("click", handleInputResult);

// Khởi động ban đầu
generateMultiplication(level);
updatePetImage(level);
result.textContent = "?";
