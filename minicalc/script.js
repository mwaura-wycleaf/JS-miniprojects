 const array = [2, 5, 8, 11];

        let result = array.reduce(getSum);

        document.querySelector("#demo").innerHTML = result;

        function getSum(total, value) {
            return total + value;
            //return total * value;
        }

       //Average
       function getAverage(numbers){
        let total = array.reduce(getSum);
        return total / numbers.length;
       }

       let average = getAverage(array);

       document.querySelector("#demo1").innerHTML = average;

       //Maximum
       function getLargest(array) {
        let largest = Math.max(...array);
        return largest;
       }
 
       document.querySelector("#demo2").innerHTML = getLargest(array);

       //Minimum
       function getSmallest(array) {
        let smallest = Math.min(...array);
        return smallest;
       }
 
       document.querySelector("#demo3").innerHTML = getSmallest(array);