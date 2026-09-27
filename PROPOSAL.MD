# CSCI 3230U - Final Project

<!-- add team names -->
### Team Members:
Thanush Dinesh

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

#### Comparators

| App | Site | What it does |
| --- | --- | --- |
| MuscleWiki | https://musclewiki.com/ | An interactive site where you click a muscle group to see videos of exercises that target it. Its core library is free, but many features are behind a paid premium subscription. |
| ExRx.net | https://exrx.net/ | A reference site with over 2,100 exercises organized by muscle group and the equipment you have available. |
| Muscle & Strength | https://www.muscleandstrength.com/ | A reference site where you can browse exercises and instructions for each muscle group, along with pre written workout programs. |

Our site is completely free, with no subscriptions or paid features. On top of letting users target the muscles they want, it also tells them which parts of their body they are neglecting, based on the workouts it creates for them. Users can also pick a physique or fitness goal, such as calisthenics, a bigger back, a bigger chest, or a pull-up target, and follow a plan built to reach it. None of these sites combines a workout builder with this kind of goal-based, personalized guidance.
