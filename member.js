function skillsMember() {
    // This is the member object
    var member = {
        name: "John Doe",
        age: 34,
        skills: ["HTML", "CSS", "JS"],
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    };
    // This is how we access the member object
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.calculateNumbers(2, 3));
}