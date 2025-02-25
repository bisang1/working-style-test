const questions = [
    "나는 업무 시작 전 계획을 세우는 편이다",
    "나는 데드라인을 지키는 것을 중요하게 생각한다",
    // 나머지 18개 질문 추가
];

const types = {
    "전략가형": {
        description: "체계적이고 계획적인 업무 스타일을 가진 당신! 큰 그림을 보며 전략적으로 일을 처리합니다.",
        minScore: 80
    },
    "실행가형": {
        description: "빠른 실행력과 추진력이 강점인 당신! 효율적으로 업무를 처리하는 것을 선호합니다.",
        minScore: 60
    },
    // 다른 유형들 추가
};

let currentQuestion = 0;
let scores = 0;

function startTest() {
    document.getElementById('landing').classList.remove('active');
    document.getElementById('question').classList.add('active');
    showQuestion();
}

function showQuestion() {
    document.getElementById('questionText').textContent = questions[currentQuestion];
    document.getElementById('progress').style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectAnswer(value) {
    scores += value;
    currentQuestion++;
    
    if (currentQuestion >= questions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    document.getElementById('question').classList.remove('active');
    document.getElementById('result').classList.add('active');
    
    const resultType = calculateResult();
    document.getElementById('resultType').textContent = resultType;
    document.getElementById('resultDescription').textContent = types[resultType].description;
}

function calculateResult() {
    const finalScore = (scores / (questions.length * 5)) * 100;
    // 점수에 따른 유형 반환 로직
    return "전략가형"; // 예시
}

function shareResult() {
    // YOUR_URL을 실제 웹사이트 URL로 교체하세요
    const shareUrl = "https://bi-sang.com/%ec%a0%95%ec%8b%a0%ec%a7%88%ed%99%98-%ec%82%b0%ec%97%85%ec%9e%ac%ed%95%b4/";
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert("링크가 복사되었습니다!");
    });
}

function restartTest() {
    currentQuestion = 0;
    scores = 0;
    document.getElementById('result').classList.remove('active');
    document.getElementById('landing').classList.add('active');
}

