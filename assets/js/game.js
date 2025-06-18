const number1 = document.querySelector(".number_1");
const number2 = document.querySelector(".number_2");
const result = document.querySelector(".result");
const inputResult = document.querySelector(".input_result");
const btnSubmit = document.querySelector(".btn_submit");
const petLv = document.querySelector(".pet_lv");

let correctResult;
let level = 1; // Bắt đầu từ bảng cửu chương 1

// Hàm tạo phép nhân ngẫu nhiên theo level (từ 1 đến 9)
function generateMultiplication(level) {
    const multiplier = level; // bảng số mấy
    const multiplicand = Math.floor(Math.random() * 10) + 1; // từ 1 đến 10

    number1.textContent = `${multiplier}`;
    number2.textContent = `${multiplicand}`;
    correctResult = multiplier * multiplicand;
}

// Cập nhật ảnh pet
function updatePetImage(level) {
    const maxLevel = 8;
    const currentLevel = Math.min(level, maxLevel);
    petLv.innerHTML = `<img src="./assets/imgs/lv${currentLevel}.png" alt="Level ${currentLevel}" />`;
}

// Xử lý khi ấn nút kiểm tra
function handleInputResult() {
    if (!inputResult.value) {
        alert("Bạn chưa nhập kết quả!");
        return;
    }

    const userAnswer = parseInt(inputResult.value);

    if (userAnswer === correctResult) {
        result.textContent = `${correctResult}`;
        alert("Chính xác!");

        level++;
        if (level > 8) {
            alert("Bạn đã hoàn thành bảng cửu chương! 🎉");
            level = 8;
        }

        updatePetImage(level);
        generateMultiplication(level);
        inputResult.value = "";
        result.textContent = "?";
    } else {
        alert("Sai rồi! Làm lại nhé!");
    }
}

// Sự kiện bấm Enter
inputResult.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        handleInputResult();
    }
});

btnSubmit.addEventListener("click", handleInputResult);

// Bắt đầu với level đầu tiên
generateMultiplication(level);
updatePetImage(level);
result.textContent = "?";
