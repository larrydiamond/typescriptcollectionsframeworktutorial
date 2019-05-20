// To run this example:
// npm install
// npm run build
// npm run compositecollection

import {ArrayList, Collections, LinkedList, TreeSet, CompositeCollection, JIterator} from "typescriptcollectionsframework";

console.log ("Welcome to the CompositeCollection example");

const collection1:ArrayList<string> = new ArrayList<string>();
collection1.add ("Cat");
collection1.add ("Squirrel");
collection1.add ("Dog");

for (const iter:JIterator<string> = collection1.iterator(); iter.hasNext(); ) {
    const tmp:string = iter.next();
    console.log (tmp);
}
  
console.log ("Size of string collection1 = " + collection1.size() + " - " + JSON.stringify (collection1));

console.log ("");  console.log ("");  console.log ("");  


const collection2:LinkedList<string> = new LinkedList<string>();
collection2.add ("Milk");
collection2.add ("Eggs");
collection2.add ("Cheese");
collection2.add ("Spinach");

for (const iter:JIterator<string> = collection2.iterator(); iter.hasNext(); ) {
    const tmp:string = iter.next();
    console.log (tmp);
}
  
console.log ("Size of string collection2 = " + collection2.size() + " - " + JSON.stringify (collection2));

console.log ("");  console.log ("");  console.log ("");  


const collection3:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());
collection3.add ("Mercury");
collection3.add ("Venus");
collection3.add ("Earth");
collection3.add ("Mars");
collection3.add ("Jupiter");
collection3.add ("Saturn");
collection3.add ("Uranus");
collection3.add ("Neptune");
collection3.add ("Pluto");

for (const iter:JIterator<string> = collection3.iterator(); iter.hasNext(); ) {
    const tmp:string = iter.next();
    console.log (tmp);
}
  
console.log ("Size of string collection3 = " + collection3.size() + " - " + JSON.stringify (collection3));

console.log ("");  console.log ("");  console.log ("");  


const composite:CompositeCollection<string> = new CompositeCollection<string>(collection1, collection2, collection3);

for (const iter:JIterator<string> = composite.iterator(); iter.hasNext(); ) {
    const tmp:string = iter.next();
    console.log (tmp);
}
  
console.log ("Size of string CompositeCollection = " + composite.size() + " - " + JSON.stringify (composite));

console.log ("");  console.log ("");  console.log ("");  

