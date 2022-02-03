// code your solution here

function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function (monday = 'go to the office') {
    return `This Monday, I will ${monday}.`
}

const wrapAdjective = function (wrap = '*') {
    const part1 = "You are";
    return function (name = 'special') {
        return `${part1} ${wrap}${name}${wrap}!`;
    };
}
