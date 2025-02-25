const questions = [
    "나는 업무 시작 전 계획을 세우는 편이다",
    "나는 데드라인을 지키는 것을 중요하게 생각한다",
     "업무 중 동료와의 소통을 중요하게 생각한다",
    "스트레스 상황에서도 침착하게 대처하는 편이다",
    "야근이나 추가 업무는 가능한 피하려고 한다",
    "업무 관련 새로운 기술이나 지식 습득에 적극적이다",
    "회사에서 개인적인 감정 표현을 자제하는 편이다",
    "업무 시간 중 개인용무는 최소화하려 노력한다",
    "동료의 업무 스타일을 존중하고 배우려 한다",
    "업무 실수를 했을 때 즉시 인정하고 수정한다",
    "회의 시간에 적극적으로 의견을 개진한다",
    "업무 관련 피드백을 긍정적으로 수용한다",
    "워라밸을 중요하게 생각한다",
    "업무 관련 결정시 상사의 의견을 우선시한다",
    "새로운 프로젝트를 시작하는 것을 즐긴다",
    "업무 성과를 정량적으로 측정하려 노력한다",
    "동료와의 친목 도모에 적극적으로 참여한다",
    "업무 관련 갈등 상황을 피하려 노력한다",
    "나만의 업무 처리 방식이 있다",
    "회사의 규칙과 규정을 잘 준수한다"
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
     "협력가형": {
        description: "팀워크와 소통을 중시하는 당신! 동료들과의 협업을 통해 최고의 결과를 이끌어냅니다. 긍정적인 분위기 조성과 원활한 의사소통이 강점입니다.",
        minScore: 40
    },
    "균형가형": {
        description: "일과 삶의 균형을 중시하는 당신! 효율적인 업무 처리와 함께 개인의 삶도 소중히 여깁니다. 스트레스 관리와 자기관리가 뛰어납니다.",
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

