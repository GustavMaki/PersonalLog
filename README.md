CHRISTMAS PROJECT: PERSONAL Journal APP


    DESCRIPTION: A personal journal mobile application that lets you write, view and sort logged notes.


    FUNCTIONS:
        -Add journal entries (max 40 characters).
        -View old entriens in a sorted list.
        -Change accounts.
        -Star-mark choice on now entries and option to show only those.


    ROUTES:
        URL: "/"          -->  Homepage where you can view all entries.
        URL: "/add"       -->  Add page where you can add new entries.
        URL: "/account"   -->  Account page where you can change accounts.
        URL: "/favorites" -->  Favorites page where you can view star marked entries.


    DATABASE CONTENT: 
        ID: Journalentries unique id.
        Entry: The text content of each entry.
        Datetime: Saves the complete date and time of entries creation.
        Date: Saves the date in a cleaner format for UX purposes.
        User: Saves which account an entry was made on.
        Star: Saves if entry is star/favorite marked or not (1/0).
        Color: Saves the corresponding color each entry type.


__________


METHODS/ PROGRAM CHOICES


    WEBBSERVER: Heroku
        MOTIVATION: Has proven itself in previous projects to be able to run the frontend/webbserver application on a stable enough level.


    DATABASE: Airtable
        MOTIVATION: The original plan was to use a JSON based datasolution that runs on Heroku parallel to the main application. But previous experience from other projects indicate that databases that runs through Heroku handles requests from the main application very slowly. I therefore choose to use the Airtable database to store the data for this project. It handles requests quickly, is opensource and can handled a satisfying amount of datarows.


    TEMPLATE: PUG

