let currentQuestion = 0;
let currentMemory = 0;

const questions = [
  "Nasılsın?",
  "Günün nasıl geçti?",
  "Bizi özlüyor musun?",
];

const memories = [
  "Eski evde yaptığın o tavuk ve brüksel lahanası...",
  "Peki her geldiğinde gittiğimiz Mesut Süre...",
  "Temu bağımlısı olduğumuz zamanlarımız...",
  "Koltuğu 11 kat sırtladığım o gün.",
  "Yılın ilk günü Land of Legendsta dönen sandalyeyi hatırlıyor musun..",
  "Sahilde yaptığımız o piknik...",
  "Pasaport heyecanımız, yetişmeyecek mi diye yaşadığımız o korku...",
  "Ve ilk yurtdışı gezimiz...",
  "2 tane kedimizin olduğu zamanlar...",
  "Doğum günündeki o evdeki yemek datemiz...",
  "Bizim için yaptığım bağışlar...",
  "İkimizin adına Mersine bağış yaptığım o 10 adet fidan, bizimle yeşerecek...",
  "Ve daha nice güzel, mutlu, önemli, bir sürü anılar, gezilerimiz...",
  "Biz seninle mutlu, güzel ve en önemlisi iyi bir aileyiz, aile olacağız....",
  "Seni çok özlüyorum...",
  "Nice güzel anılar biriktireceğimiz tüm o güzel mutlu günlere Berrin..."
];

function nextQuestion() {
  // Input boşsa geçme
  const answer = document.getElementById('answer-input').value;
  if (answer.trim() === '') return;

  document.getElementById('answer-input').value = "";
  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById('question-text').innerText = questions[currentQuestion];
  } else {
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('memory-box').classList.remove('hidden');
    document.getElementById('memory-text').innerText = memories[currentMemory];
  }
}

function nextMemory() {
  currentMemory++;
  if (currentMemory < memories.length) {
    document.getElementById('memory-text').innerText = memories[currentMemory];
  } else {
    document.getElementById('memory-box').classList.add('hidden');
    document.getElementById('final-box').classList.remove('hidden');
  }
}
