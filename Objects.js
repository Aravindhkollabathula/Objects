//  creating Object
 
 const aravindhdetails = {
    firstName : "aravindh",
    lastName : "kollabathula",
    Age : 23,
    collegeName : "MVN",
    RollNo : 15,
    Hobbies : ["Playing cricket","VollyBall","Kabaddi"]
}
console.log(aravindhdetails.firstName)
console.log(aravindhdetails.lastName)

const fullName = aravindhdetails.firstName + " " + aravindhdetails.lastName
console.log(fullName)

// Adding Property

aravindhdetails.Batch = "2019-2023"
console.log(aravindhdetails)

// To find anything from created object

console.log(aravindhdetails.collegeName)
console.log(aravindhdetails.Hobbies)

// To remove any property from created object

delete aravindhdetails.Age
console.log(aravindhdetails)

// To change the property value in object

aravindhdetails.RollNo = 20
console.log(aravindhdetails)



const aravindhdetails = {
    firstName : "aravindh",
    lastName : "kollabathula",
    Age : 23,
    collegeName : "MVN",
    RollNo : 15,
    Hobbies : ["Playing cricket","VollyBall","Kabaddi"],
    fullName : function(){
                console.log(this.firstName + " " + this.lastName)
    }
}
aravindhdetails.fullName()

const thanush = {
    firstName : "thanush",
    lastName : "reddy",
    Age : 22,
    collegeName : "narayana",
    RollNo : 10,
    Hobbies : ["VollyBall","Kabaddi"],
    fullName : function(){
        console.log(this)
    }
}
thanush.fullName()

