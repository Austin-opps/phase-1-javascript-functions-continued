// code your solution here
function saturdayFun(activity=`roller-skate`){
return `This Saturday, I want to ${activity}!`
}
// +This Saturday, I want to bathe my dog!
      
// describe("defines mondayWork function expression as specified", function() {
//     it("function exists", function() {
//       expect(mondayWork).to.exist
//     })

//     it("uses the default activity 'go to the office' when no arguments are passed", function() {
//       expect(mondayWork()).to.equal("This Monday, I will go to the office.")
//     })

//     it("permits the default activity to be overriden", function() {
//       expect(mondayWork("work from home")).to.equal("This Monday, I will work from home.")
//     })

function mondayWork(activity=`go to the office`) {
    return `This Monday, I will ${activity}.`
}


// describe("defines wrapAdjective function according to the specification", function() {
//     it("function exists", function() {
//       expect(wrapAdjective).to.exist
//     })
    
//     it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective('*')
//       let emphatic = result("a hard worker")
//       expect(emphatic).to.equal("You are *a hard worker*!")
//     });

//     it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective("||")
//       let emphatic = result("a dedicated programmer")
//       expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//     });
//   })


let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`;
    }
  }