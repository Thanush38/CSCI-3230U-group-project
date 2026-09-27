# CSCI 3230U - Final Project

<!-- add team names -->
### Team Members:
Thanush Dinesh
Cole Becker

#### Topic:
We will be making a web application that allows users to view different exercxises and their details. The application will provide a list of exercises, and users can click on an exercise to view more information about it, such as the muscle groups it targets, equipment needed, instructions and visual images of it. Along with it we will have the option to filter the exercises based on muscle groups, equipment. Also we will have the ability to make a custom workout plan by saying what muscle groups you want to target and the application will generate a workout plan for you.

#### Data Source:

**API:** ExerciseDB API (Free V1)
**Base URL:** `https://oss.exercisedb.dev/api/v1`


The free tier has 1,500+ exercises, each with an animated GIF's and step-by-step instructions on how to perform the exercise.
### Endpoints we'll use

| Endpoint | Used for |
| --- | --- |
| `GET /exercises` | List page, filtering, and generating workout plans |
| `GET /exercises/{exerciseId}` | Single exercise detail page |

The sample response is shown below.

```json
{
  "exerciseId": "EIeI8Vf",
  "name": "barbell bench press",
  "gifUrl": "https://static.exercisedb.dev/media/EIeI8Vf.gif",
  "targetMuscles": ["pectorals"],
  "bodyParts": ["chest"],
  "equipments": ["barbell"],
  "secondaryMuscles": ["triceps", "shoulders"],
  "instructions": [
    "Step:1 Lie flat on a bench with your feet flat on the ground...",
    "Step:2 Grasp the barbell with an overhand grip...",
    "Step:3 Lift the barbell off the rack..."
  ]
}
```

We will be using the following fields from the API response in our application:
| Field | Where it's used |
| --- | --- |
| `exerciseId` | Linking from the list page to the detail page |
| `name` | Exercise title on list cards and the detail page |
| `gifUrl` | Visual demonstration on the detail page and card thumbnails |
| `targetMuscles` | Detail page, muscle group filter, workout plan generator |
| `secondaryMuscles` | Detail page ("also works") |
| `bodyParts` | Filtering and grouping exercises for workout plans |
| `equipments` | Detail page and equipment filter |
| `instructions` | Step-by-step list on the detail page |