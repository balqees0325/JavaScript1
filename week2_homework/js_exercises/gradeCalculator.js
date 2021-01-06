'use strict';
// const  A = '90% - 100%';
// const  B = '80% - 89%';
// const  C = '70% - 79%';
// const  D = '60% - 69%';
// const  E = '50% - 59%';
// const  F  = '0% - 49%';


const gradecalc = (grade) => {
  grade = Number(grade);
  if(grade >89 && grade <= 100) {
    console.log(`awesome your scored an A ${grade}% `)
  } else if (grade >79 && grade <=90) {
    console.log(`great your scored a B ${grade}% `)
  } else if (grade >69 && grade <80) {
    console.log(`nice you scored a C ${grade}% `)
  } else if (grade >59 && grade <70) {
    console.log(`nice you scored a D ${grade}% `)
  } else if (grade >49 && grade <60) {
    console.log(`good  you scored an E ${grade}% `)
  } else {
    console.log(`Ooops sorry sorry dear you scored a F ${grade}% `)
  }
}
gradecalc(77);