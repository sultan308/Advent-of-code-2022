import path from "path";
import { getFileLinesAsStringArray, printAnswer } from "../utils";

export function dayOnePartOne(): void {
    const inputArray: string[] = getFileLinesAsStringArray(path.resolve(__dirname,"./input.txt"));

    let counter: number = 0;
    let max: number = 0;
    let currentInventoryTotal = 0;

    while(counter < inputArray.length) {

        let currentItem: number = Number.parseInt(inputArray[counter].trim());
        if(isNaN(currentItem)){
            counter++;
            max = max > currentInventoryTotal ? max : currentInventoryTotal;
            currentInventoryTotal = 0;
            continue;
        }
        currentInventoryTotal += currentItem;
        counter++;
    }

    printAnswer(1,1,max);
};

export function dayOnePartTwo(): void {
    const inputArray: string[] = getFileLinesAsStringArray(path.resolve(__dirname,"./input.txt"));

    let counter: number = 0;
    //where [x1 >= x2 >= x3]
    let maxArr: [number, number, number]  = [0,0,0];
    let currentInventoryTotal = 0;

    while(counter < inputArray.length) {

        let currentItem: number = Number.parseInt(inputArray[counter].trim());
        if(isNaN(currentItem)){
            counter++;

            if(currentInventoryTotal > maxArr[0]) {
                maxArr[2] = maxArr[1];
                maxArr[1] = maxArr[0];
                maxArr[0] = currentInventoryTotal;
            } 
            else if(currentInventoryTotal > maxArr[1]){
                maxArr[2] = maxArr[1];
                maxArr[1] = currentInventoryTotal;
            }
            else if(currentInventoryTotal > maxArr[2]){
                maxArr[2] = currentInventoryTotal;
            }

            currentInventoryTotal = 0;
            continue;
        }
        currentInventoryTotal += currentItem;
        counter++;
    }
    const answer = maxArr.reduce((total,num) => total+num , 0);
    printAnswer(1,1,answer);
};