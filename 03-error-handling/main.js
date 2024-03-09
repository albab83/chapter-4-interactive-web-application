// try{
//     console.log('Hallo')
//     lalaland;
//     console.log('Apa kabar')
// } catch(error) {
//     console.log('error fada fungsi');
// }

// =========================================================================

// try{
//     yaa = 3000;
//     console.log(yaa)
// } catch(err) {
//     console.error(err.name)
//     console.error(err.message)
//     console.error(err.stack)

//     console.error(err)
// }

// =========================================================================

// let error = new Error('ada kesalahan dalam fungsi');

// console.log(error.name)
// console.log(`${error.name}, ${error.message}` )

// =========================================================================

// try{
//     JSON.parse("{ bad json  o_O")
// } catch(e) {
//     console.log(e.name);
//     console.log(e.message);
// }

// =========================================================================

let json = '{"nama": "albab", "alamat": "cing cin kolot"}';

try{
    let user = JSON.parse(json);

    if(!user.hoby){
        throw new SyntaxError('tidak ada data name');
    }

    console.log(user.nama)
} catch(e) {
    console.log('Json Error:' + e.message)
} finally{
    console.log("json error handling di eksekusi")
}

// =========================================================================

// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   console.log(user.name);
// } catch (e) {
//   console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
// }

// =========================================================================

// let json = '{"age": 90}';

// try{
//    user = JSON.parse(json);
// } catch(err){
//     console.log("Json Error: " + err)
// }

// =========================================================================

// let json = '{ "age": 30 }'; // incomplete data

// try {
//   user = JSON.parse(json); // <-- forgot to put "let" before user

//   // ...
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (no JSON Error actually)
// }


// =========================================================================

// function readData() {
//   let json = '{"age": 30}';

//   try{
//     let user = JSON.parse(json);
//     if(!user.name) {
//       throw new SyntaxError('Incomplate data: no name')
//     } 
//   } catch(err) {
//     throw err;
//   }
// }

// try{
//   readData()
// } catch (err) {
//   console.log('external catch got: ' + err)
// }

// =========================================================================

// try {
//   alert("try");
//   if (confirm("Make an error?")) BAD_CODE();
// } catch (e) {
//   alert("catch");
// } finally {
//   alert("finally");
// }