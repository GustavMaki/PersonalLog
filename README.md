CHRISTMAS PROJECT: PERSONAL Journal APP


    DESCRIPTION: A personal journal mobile application that lets you write, view and sort logged notes.


    FUNCTIONS:
        -Add journal entries (max 40 characters).
        -View old entriens in a sorted list.


    ROUTES:
        URL: "/"        -->  Homepage where you can add journal entries.
        URL: "/backlog" -->  Backlog page where you can view and delete entries.


    DATABASE:

__________


METHODS/ PROGRAM CHOICES


    WEBBSERVER: Heroku
        MOTIVATION: Has proven itself in previous projects to be able to run the frontend/webbserver application on a stable enough level.


    DATABASE: Airtable
        MOTIVATION: The original plan was to use a JSON based datasolution that runs on heroku parallel to the main application. But previous experience from other projects indicate that databases that runs through heroku handles requests from the main application very slowly. I therefore choose to use the Airtable database to store the data for this project. It handles requests quickly, is opensource and can handled a satisfying amount of datarows.


    CODE TEMPLATE: PUG
        MOTIVATON: Easy and comfortable to use.