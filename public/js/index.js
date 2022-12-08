const localUserName = localStorage.getItem('userName');
const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');

const setUserNameInnerHtml = (name) => {
    headerUserNameElement.innerHTML = `${name} <span>님</span>`;
    userNameElement.textContent = name;
};

// 위에 함수는
// function setUserNameInnerHtml(name) 과 같다.

if (localUserName) {
    setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
    const userName = prompt("이름을 입력해주세요.");
    // todo: userName에 대한 유효성 검사 

    localStorage.setItem('userName', userName);

    setUserNameInnerHtml(userName);
};

const localUserHakbun = localStorage.getItem('userHakbun');         // 학번을 저장할 변수 선언
const localUserEmail = localStorage.getItem('userEmail');           // 이메일을 저장할 변수 선언
const userHakbunElement = document.querySelector('#Hakbun');        // 엘리먼트 학번 생성
const userEmailElement = document.querySelector('#Email');          // 엘리먼트 이메일 생성
const ChangeUserInfo = document.querySelector('#change');           // 한번에 변경할 change 생성

if (localUserHakbun) {  
    userHakbunElement.textContent = localUserHakbun;
}

if (localUserEmail) {
    userEmailElement.textContent = localUserEmail;
}

ChangeUserInfo.onclick = () => {
    const userHakbun = prompt("학번을 입력해주세요.");
    if (isNaN(userHakbun)==true){
        // userHakbun이 숫자가 아니면 아래를 출력하고, 이벤트 종료
        alert('학번은 숫자만 입력이 가능합니다.');
        exit;
    } else {
        // userHakbun이 숫자가 맞으면 변수를 저장하고 다음 이벤트 실행
        localStorage.setItem('userHakbun', userHakbun);
    }


    const userEmail = prompt("@ 를 포함한 이메일을 입력해주세요.");
    if(userEmail.indexOf('@') != -1){
        // userEmail에 '@' 가 있으면 아래 함수를 실행한다.
        localStorage.setItem('userEmail', userEmail);
    } else {
        // userEmail에 '@' 가 없으면 이메일이 아니라고 출력하고
        alert('이메일이 아닙니다.');
        exit;
        // 이벤트를 종료한다.
    }

    userHakbunElement.textContent = userHakbun;
    
    userEmailElement.textContent = userEmail;
}