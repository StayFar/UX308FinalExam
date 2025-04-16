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

export {hello, fahrenheitToCelsius, colour_mix}