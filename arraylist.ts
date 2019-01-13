// To run this example:
// npm install
// npm run build
// npm run arraylist

import {ArrayList, Collection, JIterator, List} from "typescriptcollectionsframework";

console.log ("Welcome to the ArrayList example!");

const example:ArrayList<string> = new ArrayList<string>();

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (const iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  const tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of string ArrayList = " + example.size() + " - " + JSON.stringify (example));

// How much does this feel like in Java
// ArrayList<String> example = new ArrayList<>();
// for (Iterator<String> iter = example.iterator(); iter.hasNext(); ) {
//   String tmp = iter.next ();
//   System.out.println (tmp);
// }
// System.out.println ("Size of ArrayList = " + example.size());

// The big difference here is that in TypeScript, string is a built in native type and in Java, String is a class

const numlist:ArrayList<number> = new ArrayList<number>();

numlist.add (4.99);
numlist.add (9.99);
numlist.add (1.99);
numlist.add (3.99);

for (const iternumber:JIterator<number> = numlist.iterator(); iternumber.hasNext(); ) {
  const tmpnumber:number = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number ArrayList = " + numlist.size() + " - " + JSON.stringify (numlist));

// This is where TypeScript begins to shine vs Java.   number is a built in native type - in Java I'd have to box an Integer or a Double type.

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

const psplist:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>();
psplist.add (psp1);
psplist.add (psp2);
psplist.add (psp3);

for (const iterpsp:JIterator<PetStoreProduct> = psplist.iterator(); iterpsp.hasNext(); ) {
  const tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct ArrayList = " + psplist.size() + " - " + JSON.stringify (psplist));

// What you may or may not have noticed is that I never defined to equals method or a hashcode method on PetStoreProduct
// The default behavior is to do a equals (===) comparison on every field in the object.   It is very easy to override this as needed
// The TypeScript Collections Framework is a full fledged generic collection framework

const listvariable : List<PetStoreProduct> = psplist;
console.log ("List<PetStoreProduct> = " + listvariable.size() + " - " + JSON.stringify (listvariable));

const collectionvariable : Collection<PetStoreProduct> = psplist;
console.log ("Collection<PetStoreProduct> = " + collectionvariable.size() + " - " + JSON.stringify (collectionvariable));

// Yep, ArrayList implements List and Collection, just like it does in Java.  
