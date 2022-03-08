import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQuestions = questions.filter(
        (quest: Question): boolean => quest.published
    );
    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const notEmpty = questions.filter(
        (quest: Question): boolean =>
            quest.body !== "" ||
            quest.expected !== "" ||
            quest.options.length !== 0
    );
    return notEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quest = questions.find((quest: Question): boolean => id === quest.id);
    return quest ? quest : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newQuest = questions.filter(
        (quest: Question): boolean => id !== quest.id
    );
    return newQuest;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((quest: Question): string => quest.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, quest: Question) => total + quest.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, quest: Question) =>
            quest.published ? total + quest.points : total + 0,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const questCSV = questions.map(
        (quest: Question): string =>
            quest.id.toString() +
            "," +
            quest.name.toString() +
            "," +
            quest.options.length.toString() +
            "," +
            quest.points.toString() +
            "," +
            quest.published.toString()
    );
    return header + questCSV.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map(
        (quest: Question): Answer => ({
            questionId: quest.id,
            text: "",
            correct: false,
            submitted: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const question = questions.map(
        (quest: Question): Question => ({ ...quest, published: true })
    );
    return question;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let result = false;
    if (
        questions.every(
            (quest: Question): boolean => quest.type === "short_answer_question"
        )
    ) {
        result = true;
    }
    if (
        questions.every(
            (quest: Question): boolean =>
                quest.type === "multiple_choice_question"
        )
    ) {
        result = true;
    }
    return result;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const question = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    const question2 = [...question, makeBlankQuestion(id, name, type)];
    return question2;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const question = questions.map(
        (quest: Question): Question => ({
            ...quest,
            name: quest.id === targetId ? newName : quest.name
        })
    );
    return question;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const question = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    const i = question.findIndex(
        (quest: Question): boolean => quest.id === targetId
    );
    if (
        question[i].type === "multiple_choice_question" &&
        newQuestionType === "short_answer_question"
    ) {
        question[i].type = newQuestionType;
        question[i].options = [];
    } else {
        question[i].type = newQuestionType;
    }
    return question;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let quest;
    if (targetOptionIndex === -1) {
        quest = questions.map(
            (qt: Question): Question =>
                qt.id === targetId
                    ? { ...qt, options: [...qt.options, newOption] }
                    : { ...qt }
        );
    } else {
        quest = questions.map(
            (qt: Question): Question =>
                pleaseHelp(qt, targetId, targetOptionIndex, newOption)
        );
    }
    return quest;
}

export function pleaseHelp(
    quest: Question,
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question {
    let tmp;
    if (quest.id === targetId) {
        tmp = { ...quest, options: [...quest.options] };
        tmp.options.splice(targetOptionIndex, 1, newOption);
    } else {
        tmp = { ...quest };
    }
    return tmp;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const question = questions.map(
        (quest: Question): Question => ({
            ...quest
        })
    );
    const i = question.findIndex(
        (quest: Question): boolean => quest.id === targetId
    );
    question.splice(i + 1, 0, duplicateQuestion(newId, question[i]));
    console.log(question);
    return question;
}
