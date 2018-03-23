const functions = require('firebase-functions');

exports.randomChanged = functions.database.ref("/lights/random").onWrite((event) => {
  const lightsRef = event.data.ref.parent
  const counterRef = lightsRef.child('counter')
  const indexRef = lightsRef.child('index')
  const colorsRef = lightsRef.child('colors')

  return counterRef.transaction(counter => counter + 1) &&
    indexRef.transaction(index => (index < 6  ? index + 1 : 0)) // TODO: 6 est en dur !
});


// return counterRef.transaction(counter => counter + 1) &&
//   colorsRef.on("value", (snapshot) => snapshot.numChildren())
//     .then(length => indexRef.transaction((index,length) => (index < length ? index + 1 : 0)))


// const length = colorsRef.orderByKey().limitToLast(1)
//   .then(snapshot => snapshot.key() || 6)

// Object.keys(colorsRef).length
// var collectionRef = event.data.ref.parent;
// var countRef = collectionRef.parent.child('counter');
//
// return countRef.transaction(function(current) {
//     if (event.data.exists() && !event.data.previous.exists()) {
//         return (current || 0) + 1;
//     }
//     else if (!event.data.exists() && event.data.previous.exists()) {
//         return (current || 0) - 1;
//     }
// });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });


// exports.incCounter = functions.https.onRequest((request, response) => {
//     //let counter =  100;
//     const counterRef = functions.database.ref('/lights/counter');
//     response.send(counterRef);
// });

//
// exports.changeIndex = functions.https.onRequest((request, response) => {
//   let index = 0
//   // if (state.lights.index < state.lights.colors.length - 1) {
//   //   index = state.lights.index + 1
//   // }
//   response.send({'index':index});
// });


// exports.countlikechange = functions.database.ref("/lights/{postid}/likes/{likeid}").onWrite((event) => {
//   var collectionRef = event.data.ref.parent;
//   var countRef = collectionRef.parent.child('likes_count');
//
//   return countRef.transaction(function(current) {
//     if (event.data.exists() && !event.data.previous.exists()) {
//       return (current || 0) + 1;
//     }
//     else if (!event.data.exists() && event.data.previous.exists()) {
//       return (current || 0) - 1;
//     }
//   });
// });