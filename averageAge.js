'use strict;' 
//test data set
const people = [
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
    {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
    {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
    {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
    {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
    {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
    {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
    {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
    {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
    {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
    {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
    {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
    {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
    {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
    {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
    {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
    {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
    {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
    {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
    {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
    {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1925, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
    {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1816, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function isFloat(number){
    return Number(number)===number && number%1!==0;
}


/**
 * The function returns the average age of men
 * @param {Array} people 
 * @param {number} century 
 * @return {number} averageAgeOfMen
 */
function calculateMenAverageAge(people, century) {
    //this variable contains total amount of years lived(difference between died and born)
    if(people === undefined && century === undefined){
        //for debugging
        console.log('Pay attention the function takes two arguments, but no arguments were passed. At least one agrument must be passed to figure out the average age of men');
    }else if( !Array.isArray(people) && !isNumeric(century)){
        //for debugging
        console.log('Two arguments were passed to the function, but one of them(or they) has/have another type(not [] and number). The function can\'t use these arguments!');
    }
    else{
        if(isFloat(century)){
            console.log('The century argument is equal type of float. It must be integer!');
        }
        //figures out the average age of man 
        //without century
        else if(century === undefined){
            //for debugging
            console.log('century wasn\'t passed');
            const allMen = people
                .filter(person => person.sex === 'm');
            amountOfYearsLived = allMen
                .reduce((previous,currentPerson)=> previous + (currentPerson.died - currentPerson.born),0)/allMen.length;
            return `The average age of men is equal ${(amountOfYearsLived).toFixed(2)}`;
        }else{
        //if century has been passed
            //for debugging
            console.log('century was passed');
            const numberOfMenSearch = people
                .filter(person => Math.ceil(person.died/100) === century)
                .filter(person => person.sex === 'm');
                const amountOfYearsLived = numberOfMenSearch
                .reduce((previous,currentPerson)=> previous + (currentPerson.died - currentPerson.born),0)/numberOfMenSearch.length;
            return `The average age of men who lived in the ${century}th century is equal ${(amountOfYearsLived).toFixed(2)}`;
        }
    }
};

//console.log(calculateMenAverageAge(people));

/**
 * calculateWomenAverageAge function which returns the average age of women
 * @param {Array} people 
 * @param {boolean} withChildren
 * @return {number}  averageAgeOfWomen
 */
function calculateWomenAverageAge(people,withChildren) {
    if(people === undefined && withChildren === undefined){
        //for debugging
        console.log('Pay attention the function takes two arguments, but no arguments were passed. At least one agrument must be passed to figure out the average age of women');
    }else if( !Array.isArray(people) && typeof(withChildren) !== 'boolean'){
        //for debugging
        console.log('Two arguments were passed to the function, but one of them(or they) has/have another type(not [] and boolean). The function can\'t use these arguments!');
    }
    else{
        //figures out the average age of women 
        //without children
        if( withChildren === undefined){
            //for debugging
            console.log('withChildren wasn\'t passed');
            const allWomen = people
                .filter(person => person.sex === 'f');
            const amountOfYearsLived = allWomen
                .reduce((previous,currentPerson)=> previous + (currentPerson.died - currentPerson.born),0)/allWomen;
            return `The average age of women is equal ${(amountOfYearsLived).toFixed(2)} years`;
        }else{
        //if withChildren boolean flag has been passed
            //for debugging
            console.log('withChildren was passed');
            //the function searches all people who have children
            function hasChildren(personSearch) {
                const resultOfSearch = people.some(person => person.mother === personSearch.name);
                return resultOfSearch;
            }
            const allWomen = people
                .filter(person => person.sex === 'f')
                .filter(hasChildren)
            const amountOfYearsLived = allWomen
                .reduce((previous,currentPerson)=> previous + (currentPerson.died - currentPerson.born),0)/allWomen;
            return `The average age of women who had children equal ${(amountOfYearsLived).toFixed(2)} years`;
        }
    }
};
//console.log(calculateWomenAverageAge(people));

/**
 * The function returns average age difference between all mothers and their children which are in the array
 * @param {Array} people 
 * @param {boolean} onlyWithSon
 * @return {number} 
 */
function calculateAverageAgeDiff(people,onlyWithSon){
    if(people === undefined && onlyWithSon === undefined){
        //for debugging
        console.log('Pay attention the function takes two arguments, but no arguments were passed. At least one agrument must be passed to figure out the average age of women');
    }else if( !Array.isArray(people) && typeof(onlyWithSon) !== 'boolean'){
        //for debugging
        console.log('Two arguments were passed to the function, but one of them(or they) has/have another type(not [] and boolean). The function can\'t use these arguments!');
    }
    else{
        //figures out the average age of women 
        //without son
        if( onlyWithSon === undefined){
            //for debugging
            console.log('onlyWithSon wasn\'t passed');
            //returns all mothers who has a child(children)
            const getName = {};
            people.forEach(person => {
                getName[person.name] = person;
            });
            
            const allWomenHasChildren = people
                .filter(person => getName[person.mother] != null)
            const amountOfYearsLived = allWomenHasChildren
                .map(person => person.born - getName[person.mother].born)
                .reduce((previous,current) => previous + current,0)/allWomenHasChildren.length;
            return `The average age of women is equal ${(amountOfYearsLived).toFixed(2)} years`;
        }else{
        //if onlyWithSon boolean flag has been passed
            //for debugging
            console.log('onlyWithSon was passed');
            //the function searches all people who have children

        }
    }
};

console.log(calculateAverageAgeDiff(people));

