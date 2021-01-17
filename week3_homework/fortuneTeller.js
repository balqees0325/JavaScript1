'use strict';
const partnerNames = ['Suleiman', 'Abdul', 'Mohammad', 'Abdullah', 'Jamal'];
const numChildren = [3, 6, 1, 4, 2];
const locations = ['Saudi', 'UK', 'Newzeeland', 'Japan', 'Egypt'];
const jobs = ['Web dev', 'counsellor', 'Content writter', 'Educationist', 'Scholar'];
const tellFortune =(num, name, location, job) =>{
  name = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  num = numChildren[Math.floor(Math.random() * numChildren.length)];
  job = jobs[Math.floor(Math.random() * jobs.length)];
  location = locations[Math.floor(Math.random() * locations.length)];
  return `You will be a ${job} in ${location}, married to ${name} with ${num} kids`;
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs)
);
console.log(tellFortune(numChildren, partnerNames, locations, jobs)
);
console.log(tellFortune(numChildren, partnerNames, locations, jobs)
);

