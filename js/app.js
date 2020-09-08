const setOfWord = [
	'Wish the report would meet your expectations and standards.',
	'Best to complete the report in a short span of time and with the quality',
	'All about branding for umbrella stands that catch the water',
	'Truly appreciate this project as it helped me to learn about the developing a brand'
]

let msg = document.getElementById('msg');
let typedWord = document.getElementById('myword');
let btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random()*setOfWord.length);
	msg.innerText = setOfWord[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = 'Done';
}

const endPlay = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime) / 1000);
	let totalWord = typedWord.value;
	let wordCount = wordCounter(totalWord);
	let speed = Math.round((wordCount / totalTime *60));
	let finalMsg = `You have typed ${speed} words per minute. `;
	finalMsg += actionMsg(msg.innerText, totalWord);
	msg.innerText = finalMsg;
}

const actionMsg = (str1, str2) => {
	let word1 = str1.split(' ');
	let word2 = str2.split(' ');
	let cnt = 0;

	word1.forEach(function(item, index) {
		if(item == word2[index]) {
			cnt++;
		}
	})

	let errorWord = word1.length - cnt;
	return (`${cnt} correct out of ${word1.length}. And total error word is ${errorWord}.`)
}

const wordCounter = (str) => {
	let response = str.split(' ').length;
	return response;
}

btn.addEventListener('click', function() {
	if(this.innerText == 'Start') {
		typedWord.disabled == false;
		playGame();
	}
	else if(this.innerText == 'Done') {
		typedWord.disabled == true;
		btn.innerText = 'Start';
		endPlay();
	}
})