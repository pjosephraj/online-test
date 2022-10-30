export interface Question {
    qid: number;
    question: string;
    answerOptions: string[];
    isCorrectAnswer?: boolean;
    selectedAnswer?: number;
    correctAnswer?: number;
}
