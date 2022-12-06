import path from "path";
import { getFileLinesAsStringArray, printAnswer } from "../utils";

export function getNumberOfProccessedCharsBeforeFirstMessage(messageSize: number): number {
    const input: string = getFileLinesAsStringArray(path.resolve(__dirname,"./input.txt"))[0];
    const windowfreq: {[key: string]: number}= {};
    let uniqueCount: number = 0
    let current = 0
 
    while(current < input.length){
        if(!windowfreq[input[current]] || windowfreq[input[current]] === 0 ) {
            windowfreq[input[current]] = 1,
            uniqueCount++;
        }else{
            windowfreq[input[current]]++;
        };
        if((current - messageSize) >= 0){
            windowfreq[input[current - messageSize]]--;
            if(windowfreq[input[current - messageSize]] <= 0){
                uniqueCount--;
            }

        }
        if(uniqueCount === messageSize) break;
        current++;
    }

    return current+1;
};
export function daySixPartOne(): void {
    let answer = getNumberOfProccessedCharsBeforeFirstMessage(4);
    printAnswer(6,1,answer);
};
export function daySixPartTwo(): void {
    let answer = getNumberOfProccessedCharsBeforeFirstMessage(14);
    printAnswer(6,2,answer);
};