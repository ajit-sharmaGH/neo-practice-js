const getShortestString = (arrString) => {
    // Your ES6 code here

    for (let i = 1; i < arrString.length; i++) {
        let shortString = arrString[0].length;
        if (arrString[i].length < shortString)

            return shortString = arrString[i];
    }


};

console.log(getShortestString(["primary", "secondary", "education", "exams"]));