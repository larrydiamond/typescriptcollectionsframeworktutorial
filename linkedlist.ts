// To run this example:
// npm install
// npm run build
// npm run linkedlist

import {Collection, JIterator, LinkedList, List} from "typescriptcollectionsframework";

console.log ("Welcome to the LinkedList example!");

// So first lets get do the same examples from LinkedList so we can get to some more interesting examples

const example:LinkedList<string> = new LinkedList<string>();

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (const iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  const tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of string LinkedList = " + example.size() + " - " + JSON.stringify (example));

console.log ("");  console.log ("");  console.log ("");  

const numlist:LinkedList<number> = new LinkedList<number>();

numlist.add (4.99);
numlist.add (9.99);
numlist.add (1.99);
numlist.add (3.99);

for (const iternumber:JIterator<number> = numlist.iterator(); iternumber.hasNext(); ) {
  const tmpnumber:number = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number LinkedList = " + numlist.size() + " - " + JSON.stringify (numlist));

console.log ("");  console.log ("");  console.log ("");  

class PetStoreProduct {
  public sku:string;
  public productName:string;

  constructor (isku:string, ipn:string) {
    this.sku = isku;
    this.productName = ipn;
  }
}
// The TypeScript Collections Framework is a full fledged generic collection framework

const psp1:PetStoreProduct = new PetStoreProduct ("123", "Leash");
const psp2:PetStoreProduct = new PetStoreProduct ("456", "Food");
const psp3:PetStoreProduct = new PetStoreProduct ("789", "Toy");

const psplist:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>();
psplist.add (psp1);
psplist.add (psp2);
psplist.add (psp3);

for (const iterpsp:JIterator<PetStoreProduct> = psplist.iterator(); iterpsp.hasNext(); ) {
  const tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct LinkedList = " + psplist.size() + " - " + JSON.stringify (psplist));

console.log ("");  console.log ("");  console.log ("");  

const listvariable : List<PetStoreProduct> = psplist;
console.log ("List<PetStoreProduct> = " + listvariable.size() + " - " + JSON.stringify (listvariable));

const collectionvariable : Collection<PetStoreProduct> = psplist;
console.log ("Collection<PetStoreProduct> = " + collectionvariable.size() + " - " + JSON.stringify (collectionvariable));

console.log ("");  console.log ("");  console.log ("");  

// Yep, all the same from LinkedList.
// Let's change that by using some of the other Java methods

console.log ("Does it contain Fox = " + example.contains ("Fox"));
console.log ("Element 1 = " + example.get (1));
console.log ("First Element = " + example.getFirst ());
console.log ("Last Element = " + example.getLast ());
console.log ("Index Of Cat = " + example.indexOf ("Cat"));

example.set (1, "Fox");
console.log ("After setting element 1 to Fox, Size of string LinkedList = " + example.size() + " - " + JSON.stringify (example));
