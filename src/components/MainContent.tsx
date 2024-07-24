// src/components/MainContent.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  answer: boolean;
}

const questions: Question[] = [
  { question: 'Distance between moon and earth is 384403km', answer: true },
  { question: 'Sun rises in the West', answer: false },
  { question: 'Python is a type of snake', answer: true },
  { question: 'The capital of France is Berlin', answer: false },
  { question: 'Water boils at 100 degrees Celsius', answer: true },
  { question: 'The capital of France is Berlin', answer: false },
  { question: 'Water boils at 100 degrees Celsius', answer: true }
];

const MainContent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleAnswer = (userAnswer: boolean) => {
    setShowAnswer(true);
  };

  const currentLevel = Math.floor(currentQuestionIndex / 5) + 1;
  const progress = ((currentQuestionIndex % 5) + 1) * 20;

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-3 mt-0">
      <div className="flex flex-col items-center mb-4">
        <div className="text-black text-xl font-semibold mb-2">Level {currentLevel}</div>
        <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm mt-2 text-gray-600">
          {5 - (currentQuestionIndex % 5)} questions to next level
        </div>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mb-8">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-semibold mb-4 text-black text-center">
              {questions[currentQuestionIndex].question}
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={() => handleAnswer(true)}
                className="relative mt-6 text-white py-2 px-6 rounded-full text-lg shadow-lg transform transition-transform active:translate-y-1 active:shadow-none bg-green-500"
              >
                True
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-red-500 relative mt-6 text-white py-2 px-6 rounded-full text-lg shadow-lg transform transition-transform active:translate-y-1 active:shadow-none hover:bg-red-600"
              >
                False
              </button>
            </div>
            {showAnswer && (
              <div
                className={`text-center mt-4 text-lg ${
                  questions[currentQuestionIndex].answer === true
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {questions[currentQuestionIndex].answer === true
                  ? 'Correct!'
                  : 'Wrong answer!'}
              </div>
            )}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 relative mt-6 text-white py-2 px-6 rounded-full text-lg shadow-lg transform transition-transform active:translate-y-1 active:shadow-none hover:bg-blue-700"
              >
                Next Question
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full max-w-xl flex justify-center">
        <Image
          src='/guythinks.png'
          alt="Cartoon guy asking question"
          width={40}
          height={40}
          className="w-1/2 h-auto"
        />
      </div>
    </main>
  );
};

export default MainContent;
