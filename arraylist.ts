// To run this example:
// npm run build
// npm run arraylist

import {ArrayList, JIterator} from "typescriptcollectionsframework";

console.log ("Welcome to the ArrayList example!");

const example:ArrayList<string> = new ArrayList<string>();

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (let iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  let tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of ArrayList = " + example.size());

// How much does this feel like in Java
// ArrayList<String> example = new ArrayList<>();
// for (Iterator<String> iter = example.iterator(); iter.hasNext(); ) {
//   String tmp = iter.next ();
//   System.out.println (tmp);
// }
// System.out.println ("Size of ArrayList = " + example.size());
