fetch("https://oss.exercisedb.dev/api/v1/exercises")
.then(response => response.json())
.then(data => {
    console.log(data);

    const exercisesContainer = document.getElementById("listing-exercises");

        data.data.forEach(exercise => {
            const exerciseElement = document.createElement("article");
            exerciseElement.classList.add('listing-info');

            exerciseElement.innerHTML = `<div class ="listing-text">
                                        <h2>${exercise.name}</h2>
                                        <p><b>Muscle Group:</b> ${exercise.bodyParts}</p>
                                        <p><b>Target Muscles:</b> ${exercise.targetMuscles}</p>
                                        <p><b>Equipment:</b> ${exercise.equipments}</p>
                                        <p><b>Intructions:</b> ${exercise.instructions}</p>
                                        </div>  
                                        <img src="${exercise.gifUrl}" alt="No image :(">`;

            exercisesContainer.appendChild(exerciseElement);
        });
})
.catch(error => {
    console.error(error);
})
