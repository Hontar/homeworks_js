// Task1

var group = [
	{
		name: "Ann",
		surname: "Black",
		age: 25,
		laptop: false
	},
	{
		name: "Henry",
		surname: "White",
		age: 27,
		laptop: true
	},
	{
		name: "Vasya",
		surname: "Ivanov",
		age: 23,
		laptop: true
	}
]

function getStudentsList (arrayOfStudents){
	var groupList = []
	for (var student of arrayOfStudents){
		var studentOfGroup = ""
		for (var prop in student){
			studentOfGroup +=`${prop} : ${student[prop]}; `				
		}
		console.log(studentOfGroup)	
		groupList.push(studentOfGroup.trim())	
	}
	console.log(groupList)
	return groupList	
}

getStudentsList(group)


// Task2

function addNewStudent(targetArray, name, surname, age, laptop){
	var targetArray = targetArray || []
	var name = name || "X"
	var surname = surname || "X"
	var age = age || 20
	var laptop = laptop || false
	targetArray.push({
		name: `${name}`,
		surname: `${surname}`,
		age: age,
		laptop: laptop,
	})
	console.log(targetArray)
}

addNewStudent(group, "Mark", "Twen", 30, true)

getStudentsList(group)


// Task 3

var taskStr = "Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"

function getNewString (str){
	var resultStr = ""
	var i = 0
	while(i < str.length){
		var check = false
		check = str.charCodeAt(i) > 1040 && str.charCodeAt(i) < 1103
		resultStr += check ? str.charAt(i) : ""
		i++
	}
	console.log(resultStr)
	return resultStr
}

getNewString(taskStr)


// Task 4

var myArr = ["b", "a", 5, "2", true, {}, [1, 2]]
function sortArray ( arr ) {
    var newArr = []
    newArr.push( arr.shift () )
    while ( arr.length > 0 ) {
        var current = arr.shift ()
        for ( var elem of newArr ) {
            if ( current.toString() < elem.toString() ) {
                newArr.splice ( newArr.indexOf( elem ), 0, current )
                current = null
                break
            }
        }
        if ( current ) newArr.push( current )
    }
    console.log(newArr)
    return newArr
}
sortArray(myArr)


// Task 5

var names = ["Vasya", "Ann", "Henry", "Bill"]
var surnames = ["Black", "White", "Gold", "Green"]

function getFullName (arrayOfNames, arrayOfSurnames){
	var fullNames = []
	var i = 0
	while (i < arrayOfNames.length && i < arrayOfSurnames.length){
		fullNames[i] = arrayOfNames[i] + " " + arrayOfSurnames[i]
		i++
	}
	console.log(fullNames)
	return fullNames	
}

getFullName(names, surnames)