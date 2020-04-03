// 상태
const questions = [
  {
    id: 1,
    question: '시작 질문. 어디에서 휴식을 취하고 싶으세요?',
    firstAnswer: '잘 손질된 잔디밭 위에서',
    secondAnswer: '들꽃이 가득 핀 오솔길에서'
  },
  {
    id: 2,
    question: '중간 질문. 해커톤이 끝나고 뭐 먹을래요?',
    firstAnswer: '막걸리, 봄동 무침, 화전',
    secondAnswer: '화이트 와인, 쭈꾸미 샤브샤브, 딸기'
  },
  {
    id: 3,
    question: '중간 잘문. 당신 옆에 앉아 있는 그 사람에게서 봄내음을 맡을 수 있나요?',
    firstAnswer: 'YES',
    secondAnswer: 'NEVER'
  },
  {
    id: 4,
    question: '마지막 질문. 당신이라면 거뜬히 소화할 수 있는 패션 아이템은?',
    firstAnswer: '철쭉색 운동화',
    secondAnswer: '개나리색 백백'
  },
  {
    id: 5,
    question: '마지막 질문. 올해 봄, 당신의 꽃구경 계획은?',
    firstAnswer: '할 거 많으니까 그저 창문으로... 봄바람에 흔들리지 말자',
    secondAnswer: '일부러라도 시간을 만들어서 가볍게 동네 한바퀴'
  },
  {
    id: 6,
    question: '마지막 질문. 10년 후 당신은 어떤 모습이고 싶으세요?',
    firstAnswer: '늘 바쁘고 긴장의 연속이지만 잘 나가는 개발자',
    secondAnswer: '개발할 있는 환경에 감사하며 천천히 성장해나가는 개발자'
  },
  {
    id: 7,
    question: '마지막 질문. 지금 당장 떠날 수 있다면?',
    firstAnswer: '친구들과 3박4일 제주도 자유여행',
    secondAnswer: '나홀로 3주간 시베리아 횡단열차 타고 모스크바 행'
  }
];

const searchLogic = [
  { question: 'question1', firstAnswer: 'question2', secondAnswer: 'question3' },
  { question: 'question2', firstAnswer: 'question4', secondAnswer: 'question5' },
  { question: 'question3', firstAnswer: 'question6', secondAnswer: 'question7' },
  { question: 'question4', firstAnswer: '1', secondAnswer: '2' },
  { question: 'question5', firstAnswer: '3', secondAnswer: '4' },
  { question: 'question6', firstAnswer: '5', secondAnswer: '6' },
  { question: 'question7', firstAnswer: '7', secondAnswer: '8' }
];

const musicList = [
  { id: 1, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 2, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 3, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 4, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 5, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 6, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 7, name: '', MusicURL: '#', MusicImg: '#' },
  { id: 8, name: '', MusicURL: '#', MusicImg: '#' }
];

const $question = document.querySelector('#question');
const $answerList = document.querySelector('#answerList');
let whatClick = '';
let musicPick = '';

// 함수
// 해당 음악 선출
function pickUpMusic() {
  searchLogic.forEach(logic => {
    if ($question.classList[0] === logic.question) musicPick = +logic[whatClick] -1;
  });
}

// 뮤직 플레이어로 변환
function musicPlayer() {
  const $musicPlayer = document.createElement('button');
  $musicPlayer.textContent = '일시정지';
  $answerList.parentNode.replaceChild($musicPlayer, $answerList);
  
  const $album = document.createElement('div');
  $album.id = 'album';
  console.log(musicPick);
  $album.innerHTML = `<img src ="${musicList[musicPick].MusicImg}" alt="${musicList[musicPick].name}">`;
  $question.parentNode.replaceChild($album, $question);
  
  // const $musicElement = new Audio(musicList[+musicPick - 1].MusicURL);
  // $musicElement.play();
}


// 이벤트
$answerList.onclick = e => {
  whatClick = e.target.id;
  if (!e.target.matches('ul#answerList > li > button') || !$question.classList.contains('lastQuestion')) return;
  pickUpMusic();
  musicPlayer();
};
