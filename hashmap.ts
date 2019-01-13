// To run this example:
// npm install
// npm run build
// npm run hashmap

import {HashMap, Collection, Collections, JIterator, JMap, MapEntry} from "typescriptcollectionsframework";

console.log ("Welcome to the HashMap example!");

const example:HashMap<string, string> = new HashMap<string, string>();

example.put ("Cat", "Meow");
example.put ("Squirrel", "Squeak");
example.put ("Dog", "Woof");

for (const iter:JIterator<MapEntry<string,string>> = example.entrySet().iterator(); iter.hasNext(); ) {
  const tmp:MapEntry<string,string> = iter.next();
  console.log (tmp.getKey() + " - " + tmp.getValue());
}

console.log ("Size of string HashMap = " + example.size() + " - " + JSON.stringify (example));

console.log ("");  console.log ("");  console.log ("");  

// How much does this feel like in Java
// HashMap<String,String> example = new HashMap<>();
// for (Iterator<Map.Entry<String, String>> iter = example.entrySet().iterator(); iter.hasNext(); ) {
//   Map.Entry<String, String> tmp = iter.next ();
//   System.out.println (tmp.getKey() + " - " + tmp.getValue());
// }
// System.out.println ("Size of HashMap = " + example.size());

// The big difference here is that in TypeScript, string is a built in native type and in Java, String is a class

const nummap:HashMap<number, number> = new HashMap<number, number>();

nummap.put (4.99, 1.0);
nummap.put (9.99, 2.0);
nummap.put (1.99, 3.0);
nummap.put (3.99, 4.0);

for (const iternumber:JIterator<MapEntry<number,number>> = nummap.entrySet().iterator(); iternumber.hasNext(); ) {
  const tmpnumber:MapEntry<number,number> = iternumber.next();
  console.log (tmpnumber);
}

console.log ("Size of number HashMap = " + nummap.size() + " - " + JSON.stringify (nummap));

console.log ("");  console.log ("");  console.log ("");  

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

const pspmap:HashMap<PetStoreProduct, string> = new HashMap<PetStoreProduct, string>();
pspmap.put (psp1, "Cat");
pspmap.put (psp2, "Dog");
pspmap.put (psp3, "Hamster");

for (const iterpsp:JIterator<MapEntry<PetStoreProduct, string>> = pspmap.entrySet().iterator(); iterpsp.hasNext(); ) {
  const tmppsp:MapEntry<PetStoreProduct, string> = iterpsp.next();
  console.log (tmppsp.getKey().sku + " - " + tmppsp.getKey().productName + " -- " + tmppsp.getValue());
}

console.log ("Size of PetStoreProduct HashMap = " + pspmap.size() + " - " + JSON.stringify (pspmap));

console.log ("");  console.log ("");  console.log ("");  

// What you may or may not have noticed is that I never defined to equals method or a hashcode method on PetStoreProduct
// The default behavior is to do a equals (===) comparison on every field in the object.   It is very easy to override this as needed
// The TypeScript Collections Framework is a full fledged generic collection framework

const mapvariable : JMap<PetStoreProduct, string> = pspmap;
console.log ("JMap<PetStoreProduct> = " + mapvariable.size() + " - " + JSON.stringify (mapvariable));

console.log ("");  console.log ("");  console.log ("");  

// Yep, HashMap implements JMap, just like it does in Java.  

// HashMap, just like in Java, does not allow duplicate elements.   New entries will simply replace the existing entry.
// Lets demonstrate that with the pspmap above that we've already populated.

pspmap.put (psp1, "Duplicate 1"); pspmap.put (psp1, "Duplicate 2"); pspmap.put (psp1, "Duplicate 3"); 

// Since the set already contained psp1, it wont have changed.

for (const iterpsp:JIterator<MapEntry<PetStoreProduct, string>> = pspmap.entrySet().iterator(); iterpsp.hasNext(); ) {
  const tmppsp:MapEntry<PetStoreProduct, string> = iterpsp.next();
  console.log (tmppsp.getKey().sku + " - " + tmppsp.getKey().productName + " -- " + tmppsp.getValue());
}

console.log ("Added some duplicates: Size of PetStoreProduct HashMap = " + pspmap.size() + " - " + JSON.stringify (pspmap));

console.log ("");  console.log ("");  console.log ("");  

// As you see from the output, the size of the map is still 3 and it's still the same three elements as above

// Comparing on every field is quick and convenient often, but often you just want to compare on just one field.   
// In any case, it's certainly faster to just compare on one field.
// Here's how to do that.

const skumap:HashMap<PetStoreProduct, string> = new HashMap<PetStoreProduct, string>(Collections.dynamicHashable("sku"));

// Wow wasnt that easier?   No toString method to write and no equals method to write, and no chance of making a mistake and getting it wrong somehow.
// And this also means you can add in any class into a Collection - they don't need to "support" this framework

skumap.put (psp1, "Cat");
skumap.put (psp2, "Dog");
skumap.put (psp3, "Hamster");

const pspDuplicateSku:PetStoreProduct = new PetStoreProduct ("123", "NotALeash");
// Since the sku of pspDuplicateSku matches the sku of psp1 ("123") this PetStoreProduct will replace the existing instance

skumap.put (pspDuplicateSku, "Replacement Text skumap");

for (const iterpsp:JIterator<MapEntry<PetStoreProduct, string>> = skumap.entrySet().iterator(); iterpsp.hasNext(); ) {
  const tmppsp:MapEntry<PetStoreProduct, string> = iterpsp.next();
  console.log (tmppsp.getKey().sku + " - " + tmppsp.getKey().productName + " -- " + tmppsp.getValue());
}

console.log ("skumap: Size of PetStoreProduct HashMap = " + skumap.size() + " - " + JSON.stringify (skumap));

console.log ("");  console.log ("");  console.log ("");  

// And when I try to add pspDuplicateSku to the original pspmap, it will add because because the default compares every field
pspmap.put (pspDuplicateSku, "Replacement Text pspmap");

for (const iterpsp:JIterator<MapEntry<PetStoreProduct, string>> = pspmap.entrySet().iterator(); iterpsp.hasNext(); ) {
  const tmppsp:MapEntry<PetStoreProduct, string> = iterpsp.next();
  console.log (tmppsp.getKey().sku + " - " + tmppsp.getKey().productName + " -- " + tmppsp.getValue());
}

console.log ("Added DuplicateSku to original map: Size of PetStoreProduct HashMap = " + pspmap.size() + " - " + JSON.stringify (pspmap));


// The great news: HashMap isn't the only implemented Map
// LinkedHashMap, TreeMap, and SkipListMap have all been ported over from the Java Collections Framework.
