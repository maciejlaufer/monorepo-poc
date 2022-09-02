import fs from "fs";
import { isNil } from "ramda";

export function saveFile() {
  fs.writeFile("helloworld.txt", "Hello World!", function (err: any) {
    if (err) return console.log(err);
    console.log("Hello World > helloworld.txt");
  });
}

export function logNumber(n: number): void {
  console.log("isNil", isNil(n));
  console.log("number: ", n);
}
