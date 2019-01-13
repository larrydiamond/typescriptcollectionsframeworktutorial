// To run this example:
// npm install
// npm run build
// npm run hashset

import {HashSet, Collection, JIterator, JSet} from "typescriptcollectionsframework";

console.log ("Welcome to the HashSet example!");

const example:HashSet<string> = new HashSet<string>();

example.add ("Cat");
example.add ("Squirrel");
example.add ("Dog");

for (const iter:JIterator<string> = example.iterator(); iter.hasNext(); ) {
  const tmp:string = iter.next();
  console.log (tmp);
}

console.log ("Size of string HashSet = " + example.size() + " - " + JSON.stringify (example));

// How much does this feel like in Java
// HashSet<String> example = new HashSet<>();
// for (Iterator<String> iter = example.iterator(); iter.hasNext(); ) {
//   String tmp = iter.next ();
//   System.out.println (tmp);
// }
// System.out.println ("Size of HashSet = " + example.size());

// The big difference here is that in TypeScript, string is a built in native type and in Java, String is a class

const numset:HashSet<number> = new HashSet<number>();

numset.add (4.99);
numset.add (9.99);
numset.add (1.99);
numset.add (3.99);

for (const iternumber:JIterator<number> = numset.iterator(); iternumber.hasNext(); ) {
  const tmpnumber:number = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number HashSet = " + numset.size() + " - " + JSON.stringify (numset));

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

const pspset:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>();
pspset.add (psp1);
pspset.add (psp2);
pspset.add (psp3);

for (const iterpsp:JIterator<PetStoreProduct> = pspset.iterator(); iterpsp.hasNext(); ) {
  const tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct HashSet = " + pspset.size() + " - " + JSON.stringify (pspset));

// What you may or may not have noticed is that I never defined to equals method or a hashcode method on PetStoreProduct
// The default behavior is to do a equals (===) comparison on every field in the object.   It is very easy to override this as needed
// The TypeScript Collections Framework is a full fledged generic collection framework

const setvariable : JSet<PetStoreProduct> = pspset;
console.log ("JSet<PetStoreProduct> = " + setvariable.size() + " - " + JSON.stringify (setvariable));

const collectionvariable : Collection<PetStoreProduct> = pspset;
console.log ("Collection<PetStoreProduct> = " + collectionvariable.size() + " - " + JSON.stringify (collectionvariable));

// Yep, HashSet implements JSet and Collection, just like it does in Java.  

// HashSet, just like in Java, does not allow duplicate elements.
// Lets demonstrate that with the pspset above that we've already populated.

pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); pspset.add (psp1); 

// Since the set already contained psp1, it wont have changed.

for (const iterpsp:JIterator<PetStoreProduct> = pspset.iterator(); iterpsp.hasNext(); ) {
  const tmppsp:PetStoreProduct = iterpsp.next();
  console.log (tmppsp.sku + " - " + tmppsp.productName);
}

console.log ("Size of PetStoreProduct HashSet = " + pspset.size() + " - " + JSON.stringify (pspset));

// As you see from the output, the size of the set is still 3 and it's still the same three elements as above

