// To run this example:
// npm install
// npm run build
// npm run treeset


import {TreeSet, Collection, Collections, JIterator, JSet} from "typescriptcollectionsframework";

console.log ("Welcome to the TreeSet example!");

const example:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (const iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  const tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of string HashSet = " + example.size() + " - " + JSON.stringify (example));

console.log ("");  console.log ("");  console.log ("");  

// How much does this feel like in Java
// TreeSet<String> example = new TreeSet<>();
// for (Iterator<String> iter = example.iterator(); iter.hasNext(); ) {
//   String tmp = iter.next ();
//   System.out.println (tmp);
// }
// System.out.println ("Size of TreeSet = " + example.size());

// The big difference here is that in TypeScript, string is a built in native type and in Java, String is a class

const numset:TreeSet<number> = new TreeSet<number>(Collections.getNumberComparator());

numset.add (4.99);
numset.add (9.99);
numset.add (1.99);
numset.add (3.99);

for (const iternumber:JIterator<number> = numset.iterator(); iternumber.hasNext(); ) {
  const tmpnumber:number = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number TreeSet = " + numset.size() + " - " + JSON.stringify (numset));

console.log ("");  console.log ("");  console.log ("");  

// This is where TypeScript begins to shine vs Java.   number is a built in native type - in Java I'd have to box an Integer or a Double type.

// Now lets show sorting using a class rather than one of the built in types

class PetStoreProduct {
  public sku:string;
  public productName:string;

  constructor (isku:string, ipn:string) {
    this.sku = isku;
    this.productName = ipn;
  }
}

const psp1:PetStoreProduct = new PetStoreProduct ("123", "Leash");
const psp2:PetStoreProduct = new PetStoreProduct ("456", "Food");
const psp3:PetStoreProduct = new PetStoreProduct ("789", "Toy");

const pspset:TreeSet<PetStoreProduct> = new TreeSet<PetStoreProduct>(Collections.dynamicComparator("sku"));
pspset.add (psp1);
pspset.add (psp2);
pspset.add (psp3);

for (const iterpsp:JIterator<PetStoreProduct> = pspset.iterator(); iterpsp.hasNext(); ) {
  const tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct TreeSet = " + pspset.size() + " - " + JSON.stringify (pspset));

console.log ("");  console.log ("");  console.log ("");  

const testNumber = 2.99;

console.log ("Demoing some basic methods.....");
console.log ("Contains returns true if the set contains the element, which for " + testNumber + " is " + numset.contains(testNumber));
console.log ("Remove removes the element and returns true if the set contains the element, which for " + testNumber + " is " + numset.remove(testNumber));

console.log ("");  console.log ("");  console.log ("");  

console.log ("Demoing the navigable methods.....");
console.log ("Ceiling returns the least element equal to or higher than this element, which for " + testNumber + " is " + numset.ceiling(testNumber));
console.log ("Floor returns the highest element less than or equal to this element, which for " + testNumber + " is " + numset.floor(testNumber));
console.log ("First returns the lowest element in this set, which is " + numset.first());
console.log ("Last returns the highest element in this set, which is " + numset.last());
