import {fahrenheitToCelsius, hello, colour_mix, largest_product} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>
}

function Question3(){
    return <section>
3. Determines the secondary rgb_colour from mixing two primary
    RGB (Red, Green, Blue) colours. The order of the colours
    is *not* significant.
<h2>results</h2>
<p>colour_mix("red", "blue") == "{colour_mix(fuchsia)}"</p>
<p>colour_mix("green", "blue") == "{colour_mix(aqua)}"</p>
<p>colour_mix("red", "yellow") == "{colour_mix(Error)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Returns the product of the two largest values of
    val1, val2, and val3.
    Use: product = largest_product(val1, val2, val3)
<h2>results</h2>
<p>largest_product(3, 5, 2) == "{largest_product(15)}" </p>
<p>largest_product(-1, 7, 4) == "{largest_product(28)}" </p>
<p>largest_product(-3, -5, -2) == "{largest_product(6)}" </p>
    </section>
}

export {Question1, Question2, Question3, Question4}