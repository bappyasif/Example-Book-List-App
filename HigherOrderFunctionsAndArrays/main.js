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
  // sort
  // reduce