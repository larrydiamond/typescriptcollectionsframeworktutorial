// To run this example:
// npm install
// npm run build
// npm run linkedlist

import {Collection, JIterator, LinkedList, List} from "typescriptcollectionsframework";

console.log ("Welcome to the LinkedList example!");

// So first lets get do the same examples from ArrayList so we can get to some more interesting examples

const example:LinkedList<string> = new LinkedList<string>();

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (let iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  let tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of string LinkedList = " + example.size() + " - " + JSON.stringify (example));

const numlist:LinkedList<number> = new LinkedList<number>();

numlist.add (4.99);
numlist.add (9.99);
numlist.add (1.99);
numlist.add (3.99);

for (let iternumber:JIterator<number> = numlist.iterator(); iternumber.hasNext(); ) {
  let tmpnumber:number = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number LinkedList = " + numlist.size() + " - " + JSON.stringify (numlist));

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

const psplist:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>();
psplist.add (psp1);
psplist.add (psp2);
psplist.add (psp3);

for (let iterpsp:JIterator<PetStoreProduct> = psplist.iterator(); iterpsp.hasNext(); ) {
  let tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct LinkedList = " + psplist.size() + " - " + JSON.stringify (psplist).replace(/\\"/g, '"'));

const listvariable : List<PetStoreProduct> = psplist;
console.log ("List<PetStoreProduct> = " + listvariable.size() + " - " + JSON.stringify (listvariable).replace(/\\"/g, '"'));

const collectionvariable : Collection<PetStoreProduct> = psplist;
console.log ("Collection<PetStoreProduct> = " + collectionvariable.size() + " - " + JSON.stringify (collectionvariable).replace(/\\"/g, '"'));

// Yep, all the same from ArrayList, nothing impressive yet.
// Let's change that by using some of the other Java methods

console.log ("Does it contain Fox = " + example.contains ("Fox"));
console.log ("Element 1 = " + example.get (1));
console.log ("First Element = " + example.getFirst ());
console.log ("Last Element = " + example.getLast ());
console.log ("Index Of Cat = " + example.indexOf ("Cat"));

example.set (1, "Fox");
console.log ("After setting element 1 to Fox, Size of string LinkedList = " + example.size() + " - " + JSON.stringify (example).replace(/\\"/g, '"'));
