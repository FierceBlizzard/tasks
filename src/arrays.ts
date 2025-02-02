/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const nums: number[] = [];
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        nums[0] = numbers[0];
        nums.splice(1, 0, nums[0]);
        return nums;
    }
    nums.splice(0, 0, numbers[0]);
    nums.splice(1, 0, numbers[numbers.length - 1]);
    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triplenum = numbers.map((num: number): number => num * 3);
    return triplenum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((numbers: string): number =>
        parseInt(numbers) ? parseInt(numbers) : 0
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = amounts.map((amounts: string): number =>
        parseInt(amounts.replace("$", ""))
            ? parseInt(amounts.replace("$", ""))
            : 0
    );
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let msg = messages.filter(
        (sentense: string): boolean => !sentense.includes("?")
    );
    msg = msg.map((msgs: string): string =>
        msgs.endsWith("!") ? msgs.toUpperCase() : msgs
    );
    return msg;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordlist = words.filter((word: string): boolean => word.length < 4);
    return wordlist.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colours = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return colours.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return "" + sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.some((val: number): boolean => val < 0) === false) {
        const sum: number = values.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const postlist1 = [...values, sum];
        return postlist1;
    }
    const i = values.findIndex((num: number): boolean => num < 0);
    const postlist2 = values.filter(
        (val: number): boolean => values.indexOf(val) < i
    );
    const sum = postlist2.reduce(
        (total: number, num: number) => total + num,
        0
    );
    const postlist3 = [...values];
    postlist3.splice(i + 1, 0, sum);
    return postlist3;
}
