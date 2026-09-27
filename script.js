// There is an issue with this api (free version) -> need alternative
const API_Key = "wx_484fbaebd972b6cf741a14c074c2219917ef19dac4f596cd01f1fd85";

fetch("https://api.workoutxapp.com/v1/workout/generate", {
    headers: {
        "X-WorkoutX-Key": API_Key
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})