fetch("https://oss.exercisedb.dev/api/v1/exercises")
.then(response => response.json())
.then(data => {
    console.log(data);

    const exercisesContainer = document.getElementById("exercises");

        data.data.forEach(exercise => {
            const exerciseElement = document.createElement("div");

            exerciseElement.innerHTML = `<h2>${exercise.name}</h2>
                                        <p><b>Target Muscles:</b> ${exercise.targetMuscles}</p>
                                        <p><b>Equipment:</b> ${exercise.equipments}</p>
                                        <p><b>Intructions:</b> ${exercise.instructions}</p>
                                        <img src="${exercise.gifUrl}" alt="">`;

            exercisesContainer.appendChild(exerciseElement);
        });
})
.catch(error => {
    console.error(error);
})
