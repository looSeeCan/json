document.title = "JSON";

(() => {

    /// crate an object
    const myObject = {};
    
    myObject.firstName = "Lucycan";
    myObject.lastName = "Ly";
    myObject.gender = "male";
    myObject.age = 43;
    myObject.myArray = ["Sheng", "Pangfoua", "Ricki"];
    myObject.greeting = function() {
        return "Hello World";
    };

    console.log(myObject);
    const x = myObject.greeting();
    console.log(x);

    /// JSON
    const myJSON = {"firstName": "Lucycan", "lastName": "Ly", "gender": "male", "age": 43}; /// key and value needs to be double quoted
    const myJSON1 = {'firstName': 'Lucycan', 'lastName': 'Ly', 'gender': 'male', 'age': 43}; ///this is not valid json. must use double quotes

})();

(() => { ///Stringify and Parse
    const myJSON = {"firstName": "Lucycan", "lastName": "Ly", "gender": "male", "age": 43}; /// start as a JSON object
    console.log(myJSON);
    const myJSONStringified = JSON.stringify(myJSON); /// turn json into string
    console.log(myJSONStringified);
    
    const myJSONParsed = JSON.parse(myJSONStringified); /// parse it back to an object
    console.log(myJSONParsed);

    myJSONParsed.firstName = "DenLy"; /// change the value of the first name
    console.log(myJSONParsed);

    const sendData = JSON.stringify(myJSONParsed); /// final data to send, stringified
    console.log(sendData);

})();

(() => {
    
})();