// Add your code here

//write a submitData function
//takes two string (name) and (email)

function submitData(userName, userEmail){
    const personObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }
    return fetch("http://localhost:3000/users", personObject)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            console.log(object)
            document.body.textContent = object['id']
        })
        .catch(function(error){
            alert("Uh oh! Error!")
            document.body.textContent = error.message 
        })
}

submitData("Steve", "steve@steve.com")
submitData("Sam", "sam@sam.com")









//const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(object){
//         console.log(object)
//     })
//     .catch(function(error){
//         alert("Bad things! Ragnarok!")
//         console.log(error.message)
//     })