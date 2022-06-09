# URL Shortenner

## Starting The App and Downlaoing Dependencies
### Mongo DB
This app uses MonogoDB to store records, you will need a MongoBD account.
Add the following connection string to `MONGO_DB_CONNECTION_STRING` in `~/.env.local` replacing the entities with your own details; "mongodb+srv://~username~:~password~@~your-cluster-url~/test?retryWrites=true&w=majority"
If you wish to run MonogDB in docker for a more streamlined development experince, please add the URI to your local MongoDB instance. This proved helpful for devlopment of the application so far.
Add the database name you would like to add records to under `MONGO_DB_DATABASE` in `~/.env.local`.
Add the `API_BASE_URL` to both `~/.env.local` and `~/next.config.json` to set the url to both the node environment and client environment respectivly.
### Installing Dependencies
Run npm `npm i` at the root level of your app.
### Application Scrit
- `npm run start`: starts local instance of the application
- `npm run test`: runs all the tests suits

## Further Enhancements
### Form Validation
The form for entering urls currently just uses browser validation future enhancemnts could involve;
- none empty submissions
- checks to see if entered URL is already encrypted
- enhanced regex matcher
### Loading Handlers
I have choosen not to process any laoding states in this application for simplicity but could impliment the following loading handling;
- disbale the 'generate' button while post request id running to avoid any issue with stacking requests.
- get exisiting URLs needs no laoding state as it is server side fetched
### CSS
The CSS on the page is not perfect, this could do with some impromvemnt.
### using NextJs middleware for the establishing connection and getting db instance
Unfortunatley this was not easily possible inside NextJS middleware. Modules supported in middlewear can only contain ES modules and not use any native Node.js APIs. The MongoDB module unfortunalty leverages such prohibited APIs.

