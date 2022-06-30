let exercises = ["Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks", "Squats", "Weighted Squats", "Inch Worms"];

const randomExercises = numberOfRandomExercises =>  {
    for (let i = 0; i < numberOfRandomExercises; i++){
        console.log(exercises[Math.floor(Math.random()*10)]);
    }   
}

// randomExercises(100);

const genBuzz = number => {
    for (i = 1; i <= number; i++) {
        let array = '';

        if (i % 3 == 0) { array += "Gen" }
        if (i % 5 == 0) { array += "Buzz" }
        
        if (array == '') { array = i }

        console.log(array);
    }
}

genBuzz(60);

const checkPrice = item => {
    switch (item) {
        case "Shoes":
            alert('Shoes- $50')
            break;
        case "Jeans":
            alert('Jeans- $25')
            break;
        case "Hat":
            alert('Hat- $12')
            break;
        case "Socks":
            alert('Socks- $2')
            break;
        default:
            alert('Invalid Item');
    }
}

// checkPrice("Socks");
