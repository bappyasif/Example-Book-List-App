const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

  // forEach
//   companies.forEach(function(Company, index, companies) {
//       console.log(Company);
//       console.log(Company.name);
//   });

  // filter
  // Filter Drinking Age Array 
  let canDrink = [];
  for(let count = 0; count<ages.length; count++) {
      if(ages[count] >= 21) {
          canDrink.push(ages[count]);
      }
  }

  const canDrinkFilterMethod = ages.filter(function(age) {
    if(age>=21) {
        return true;
    }
});

const anotherWay = ages.filter(age => age>=21);
console.log(anotherWay);

console.log(canDrinkFilterMethod);

console.log(canDrink);

// Filter Retail Companies Array
const retailCompanies = companies.filter(function(Company) {
    if(Company.category == "Retail") {
        return true;
    }
});

console.log(retailCompanies);

const anotherRetailCompaniesFilter = companies.filter(Company => Company.category == "Retail");

console.log(anotherRetailCompaniesFilter);

const anotherFilter = companies.filter(Company => (Company.start >= 1980 && Company.start <=1990));

console.log(anotherFilter);

const filteredCompanies = companies.filter(Company => (Company.end - Company.start >= 10));

console.log(filteredCompanies);

// map
// Creating Array Of Company Names
const companyNames = companies.map(function(company) {
  return company.name;
});

console.log(companyNames);

const testMap = companies.map(function(company) {
  return `{company.name} [${company.start} - ${company.end}]`;
});

console.log(testMap);

const testMapShortHand = companies.map(company => `${company.name} [${company.start} -- ${company.end}]`);

console.log(testMapShortHand);

// Creating Map Array Of Ages
const agesSquared = ages.map(age => Math.sqrt(age));

console.log(agesSquared);

const agesMapped = ages.map(age => age * 2);

console.log(agesMapped);

const chainedMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age *2);

console.log(chainedMap);

// sort
// Sorting Companies By Start Year
const sortedCompanies = companies.sort(function(comp_1, comp_2) {
  if(comp_1.start > comp_2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

const sortedCompaniesShortHand = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompaniesShortHand);

// Sorting Ages
const notQuiteSortAges = ages.sort();

console.log(notQuiteSortAges);

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

const sortedAges = ages.sort((a, b) => b - a);

console.log(sortedAges);

// reduce
let ageSum = 0;

for(let i = 0; i<ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

const ageSumUsingReduce = ages.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

console.log(ageSumUsingReduce);

const usingReduceShortHand = ages.reduce((total, value) => total + value, 0);

console.log(usingReduceShortHand);

// Get Total Years For Companies
const totalYears = companies.reduce(function(accum, company) {
  return accum + (company.end - company.start);
}, 0);

console.log(totalYears);

const totalYearsShortHand = companies.reduce((accum, value) => accum + (value.end - value.start), 0);

console.log(totalYearsShortHand);

// Combinig All These Methods
const combinedSpecs = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0);

console.log(combinedSpecs);