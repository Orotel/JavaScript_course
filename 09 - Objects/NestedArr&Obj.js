// Nested array
 const student = {
    firstName:'david',
    lastName :'Jones',
    strengths:['music','art'],
    exams    :{
      midterm:92,
        final:88
    }
 };
 let average = student.exams.midterm + student.exams.final ;
 console.log(average/2)

//  obj inside array
const shoppingCart = [
    {
        product : 'jenga classic',
        price : 6.88,
        quantity : 1
    },
    {
        product : 'Echo Dot',
        price : 29.99,
        quantity : 3
    },
    {
        product : 'Fire Stick',
        price : 39.99,
        quantity :2 
    },

];