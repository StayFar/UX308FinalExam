function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

function colour_mix(rgb_colour1, rgb_colour2) {
    const validColours = ["red", "green", "blue"];

    // Normalize input to lowercase
    rgb_colour1 = rgb_colour1.toLowerCase();
    rgb_colour2 = rgb_colour2.toLowerCase();

    // Check for invalid inputs
    if (!validColours.includes(rgb_colour1) || !validColours.includes(rgb_colour2)) {
        return "Error";
    }

    // If both colours are the same, return it
    if (rgb_colour1 === rgb_colour2) {
        return rgb_colour1;
    }

    // Define combinations
    const combinations = {
        "red+blue": "fuchsia",
        "blue+red": "fuchsia",
        "red+green": "yellow",
        "green+red": "yellow",
        "green+blue": "aqua",
        "blue+green": "aqua"
    };

    return combinations[`${rgb_colour1}+${rgb_colour2}`] || "Error";
}

function largest_product(val1, val2, val3) {
    // Put the values into an array
    const values = [val1, val2, val3];

    // Sort the array in descending order
    values.sort((a, b) => b - a);

    // Multiply the two largest values
    return values[0] * values[1];
}

function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (day_num >= 1 && day_num <= 7) {
        return days[day_num - 1];
    } else {
        return "Error";
    }
}

function pay_raise(status, years, salary) {
    let raiseRate = 0;

    if (status === 'F') {
        if (years >= 10) {
            raiseRate = 0.05;
        } else if (years < 4) {
            raiseRate = 0.015;
        } else {
            raiseRate = 0.02;
        }
    } else if (status === 'P') {
        if (years > 10) {
            raiseRate = 0.03;
        } else if (years < 4) {
            raiseRate = 0.01;
        } else {
            raiseRate = 0.02;
        }
    } else {
        return "Error: Invalid status";
    }

    const new_salary = salary + (salary * raiseRate);
    return new_salary;
}

function is_leap(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
export {hello, fahrenheitToCelsius, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap}