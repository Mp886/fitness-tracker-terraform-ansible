document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const nutritionForm = document.getElementById('nutrition-form');
    const progressForm = document.getElementById('progress-form');

    const workoutsContainer = document.getElementById('workouts-container');
    const nutritionContainer = document.getElementById('nutrition-container');
    const progressContainer = document.getElementById('progress-container');

    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const workoutName = document.getElementById('workout-name').value;
        const workoutDetails = document.getElementById('workout-details').value;

        const workout = document.createElement('div');
        workout.className = 'workout';
        workout.innerHTML = `<h3>${workoutName}</h3><p>${workoutDetails}</p>`;
        workoutsContainer.appendChild(workout);

        workoutForm.reset();
    });

    nutritionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nutritionName = document.getElementById('nutrition-name').value;
        const nutritionDetails = document.getElementById('nutrition-details').value;

        const nutrition = document.createElement('div');
        nutrition.className = 'nutrition';
        nutrition.innerHTML = `<h3>${nutritionName}</h3><p>${nutritionDetails}</p>`;
        nutritionContainer.appendChild(nutrition);

        nutritionForm.reset();
    });

    progressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const progressName = document.getElementById('progress-name').value;
        const progressDetails = document.getElementById('progress-details').value;

        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.innerHTML = `<h3>${progressName}</h3><p>${progressDetails}</p>`;
        progressContainer.appendChild(progress);

        progressForm.reset();
    });
});
