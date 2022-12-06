import fs from "fs";

export function getFileLinesAsStringArray(path: string): string[] {
    const data = fs.readFileSync( path, {encoding:'utf8', flag:'r'});
    const lines: string[] = data.split(/\r?\n/);
    return lines;
};

export function printAnswer(day: number, part: number, answer: any): void {
    console.log(`Day ${day} | Part ${part} answer is ${answer}`);
};