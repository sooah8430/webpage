const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator(){
    const nameValue = document.querySelector("#name_value");
    let yearValue = document.querySelector("#year_value");
    let yearValue_int = Number(yearValue.value);

    const nameResult = document.querySelector(".name_result");
    const yearResult = document.querySelector(".year_result");

    if(nameValue.value === "키랩스" || nameValue.value == "") {
        alert('이름이 입력되지 않았습니다.');
        nameValue.focus();
        return false;
    } else if (yearValue.value== "") {
        alert('년도가 입력되지 않았습니다.');
        yearValue.focus();
        return false;
    } else if (yearValue_int > 2023 || yearValue_int < 0) {
        alert('잘못된 값입니다. 0 ~ 2023 값을 입력해 주세요.');
        return false;
    }
    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        nameResult.innerText = nameValue.value;
        if(yearValue_int%12 == 0 ){yearResult.innerText = '원숭이띠';}
        else if(yearValue_int%12 == 1 ){yearResult.innerText = '닭띠';}
        else if(yearValue_int%12 == 2 ){yearResult.innerText = '개띠';}
        else if(yearValue_int%12 == 3 ){yearResult.innerText = '돼지띠';}
        else if(yearValue_int%12 == 4 ){yearResult.innerText = '쥐띠';}
        else if(yearValue_int%12 == 5 ){yearResult.innerText = '소띠';}
        else if(yearValue_int%12 == 6 ){yearResult.innerText = '호랑이';}
        else if(yearValue_int%12 == 7 ){yearResult.innerText = '토끼띠';}
        else if(yearValue_int%12 == 8 ){yearResult.innerText = '용띠';}
        else if(yearValue_int%12 == 9 ){yearResult.innerText = '뱀띠';}
        else if(yearValue_int%12 == 10 ){yearResult.innerText = '말띠';}
        else if(yearValue_int%12 == 11 ){yearResult.innerText = '양띠';}
    }, 1000);   
}

//수강신청, 은행(주식시장) : 엄청 많은사람들 단기간에몰림

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);