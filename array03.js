function prime_numbers(n){
    /* Function to store first n prime_numbers in an array
    Return the array containing the prime numbers */

    n = parseInt(n);
    let primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;

    function isPrime(x) {
        if (x < 2) return false;
        for (let i = 2; i <= Math.sqrt(x); i++){  // FIXED HERE
            if (x % i === 0) return false;
        }
        return true;
    }
}

