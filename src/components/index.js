document.title = "JSON";

(() => {/// create an object
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
    console.groupCollapsed("Stringify and Parse");
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
    console.groupEnd();

})();

(() => {
    console.group();
        const people = JSON.parse(localStorage.getItem("tester2")) || {"firstName": "none", "lastName": "none"}; /// the first time we come into the page "people" will
        /// equal the latter of the ||, because, tester2 does not exist untill we hit the Add to storage button. If we hit the view storage button, tempHolder will also
        /// equal the latter for the same reason. If we hit the Add to storage
        console.log(people);
        
        const addButton = document.getElementById("addButton").addEventListener("click", () => { /// a button that add values to a json file
            let tempFirst = document.getElementById("firstName").value;
            let tempLast = document.getElementById("lastName").value;
            let myObject = {"firstName": tempFirst, "lastName": tempLast};
            console.log(myObject);
            // localStorage.setItem("tester2", myObject); /// key: value. tester2 is the key, the name of the file. tempFirst is the value. we can not pass an object here.
            /// thats why we must stringify
            const stringify = JSON.stringify(myObject);
            localStorage.setItem("tester2", stringify);
            console.log(stringify);
        });

        const seeButton = document.getElementById("seeButton").addEventListener("click", () => { /// a button that lets us view the json file
            // let tempHolder = localStorage.getItem("tester2");
            let tempHolder = JSON.parse(localStorage.getItem("tester2")) || people; /// if tester2 does not exist then tempHolder becomes people
            console.log(tempHolder);
        });
        
    console.groupEnd();
})();