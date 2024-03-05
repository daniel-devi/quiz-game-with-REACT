import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},	
		{
		questionText: "Who is the founder of Microsoft?",
		answerOptions: [
			{ answerText: "Bill Gates", isCorrect: true },
			{ answerText: "Steve Jobs", isCorrect: false },
			{ answerText: "Mark Zuckerberg", isCorrect: false },
			{ answerText: "Larry Page", isCorrect: false }
		]
		},
		{
		questionText: "What does CPU stand for?",
		answerOptions: [
			{ answerText: "Central Processing Unit", isCorrect: true },
			{ answerText: "Computer Personal Unit", isCorrect: false },
			{ answerText: "Central Personal Unit", isCorrect: false },
			{ answerText: "Computer Processing Unit", isCorrect: false }
		]
		},
		{
		questionText: "What is the full form of RAM in computing?",
		answerOptions: [
			{ answerText: "Random Access Memory", isCorrect: true },
			{ answerText: "Read And Modify", isCorrect: false },
			{ answerText: "Resistant Access Memory", isCorrect: false },
			{ answerText: "Random Allocation Memory", isCorrect: false }
		]
		},
		{
		questionText: "Which programming language is commonly used for web development?",
		answerOptions: [
			{ answerText: "Java", isCorrect: false },
			{ answerText: "Python", isCorrect: false },
			{ answerText: "Ruby", isCorrect: false },
			{ answerText: "JavaScript", isCorrect: true }
		]
		},
		{
		questionText: "What does URL stand for?",
		answerOptions: [
			{ answerText: "Universal Resource Locator", isCorrect: false },
			{ answerText: "Uniform Resource Locator", isCorrect: true },
			{ answerText: "Unified Resource Locator", isCorrect: false },
			{ answerText: "Uniform Request Locator", isCorrect: false }
		]
		},
		{
		questionText: "What is the largest social media platform in the world?",
		answerOptions: [
			{ answerText: "Facebook", isCorrect: true },
			{ answerText: "Twitter", isCorrect: false },
			{ answerText: "Instagram", isCorrect: false },
			{ answerText: "LinkedIn", isCorrect: false }
		]
		}
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	
	const handleResetQuestionClick = () => {
		setShowScore(false)
		setScore(0)
		setCurrentQuestion(0)
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<button className='retry' onClick={handleResetQuestionClick}>Retry</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}/{questions.length}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}