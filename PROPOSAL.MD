# CSCI 3230U - Final Project

<!-- add team names -->
### Team Members:
Thanush Dinesh

#### Topic:
We will be making a web application that allows users to view different exercxises and their details. The application will provide a list of exercises, and users can click on an exercise to view more information about it, such as the muscle groups it targets, equipment needed, instructions and visual images of it. Along with it we will have the option to filter the exercises based on muscle groups, equipment. Also we will have the ability to make a custom workout plan by saying what muscle groups you want to target and the application will generate a workout plan for you.

#### Data Source:

**API:** ExerciseDB API (Free V1)
**Base URL:** `https://oss.exercisedb.dev/api/v1`

#### Scaled Feature Plan:
Kharintirasakar: Will be responsible for making the workout planner, this website will use drop down menuns and tables to list activities planned as well as having prebuilt workouts for one to use. After that once JavaScript is used results will be displayed using calculations for calories gained and lost. Javascript may be used if time permits to make a graph about this. Furthermore if time permits there may be reccamended workouts based on which section is believed to be the most missing. This will overall be where the user plans their workouts and the time needed to complete them. Buttons will also be added to ensure that the the selected components will be added as well as an undo button. Currently the planned route will be https://WorkOnSite.com/plan. 

Cole: Will be responsible for making the list of workouts to that are provided in the website, with JavaScript add these wills be used to help make the workout planner suggestions in the dropdown menu. They also serve to inform the user of the best workouts to improve on in desired areas. This will also include a search bar to find which workouts to do as well as detailed descriptions about each workout. Images will be provided to help the user better understand the workouts. A learn more button may possible be included for each section so that when pressed a pop up will be shown to display more detailed information as well as reccamended times for the workout. Currently the planned route will be https://WorkOnSite.com/listings

Thanush: Will be responsible for makinng the homepage. This will include a much more braod and general list of workouts as well as a search bar for muslce groups. A dropdown menu will also help search for the webiste. It will also as a search bar for muscle groups that are benefited by the workout. This will also have quick links to famous workout routines that will be used by the webiste planner. General UI features and decoartions will mainly be in the home page where it can navigate and help the user better understand the website as well and it's functionality. Additionally if time permits, Javascrpit may be used to allow the user to click the excersize and go to listing to get the more detailed version. Currently the planned route will be https://WorkOnSite.com/home

Unaminous: Will be responsible for making the reccamended workout page. This will be used by the workout planenr for builds to suggest. It will include inputs from the user for their main focus and give workouts as well as a paragraph as to why the workout is the best for them. It will also use previous workout pages to see how to adapt this to ensure optimal performance by the user. This can include statistics like average number of steps as well as a generated goal using a button to apply this to the workout planner. There will also be feedback in this part using the data we had. Currently the planned route will be https://WorkOnSite.com/

All vertical slices will use the same API: **Base URL:** `https://oss.exercisedb.dev/api/v1` 



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