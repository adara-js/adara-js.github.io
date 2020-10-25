function returnDay(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if (num < 1 || num > 7) {
        return null;
    } else {
        index = num-1;
        return days[index];
    }
}