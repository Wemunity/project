# The Wemunity project 
An open innovation project. Can those that recovered from Corona Virus Disease (and acquired immunity) register to help the sick in their local communities? 

## Project background

The Wemunity project is initiated by New and Deloitte Digital, based on an idea to utilize immunity of individuals strategically in the civic response to the Covid 19 outbreak. The idea was initially shared in social media. Given the positive feedback from medical expertise, a group of technologists and designers jointly decided to explore this further. 

The current ambition is to prepare a system for registry and validation of immune helpers. The system will be made available as soon as tests can confirm immunity. We work to validate the initial concept and plan to open source the project. At the current stage any technical and financial support is welcome.

## Current status
At the time of writing, March 30, 2020, the prod version consists of a single static landing page. The onboarding branch contains an onboarding module on /signup which is a work in progress and that currently needs a backend to handle data input from users during registration as well as authentication (BankID, SPID etc). An API needs to be built with appropriate endpoints to post and get data as well as somewhere to store it. The onboarding is functional, but it doesn’t do anything. 

Next up front-end wise is building the user profile page where the user can view her/his immunity certificate and change profile attributes such as what that user wants to contribute with and her/his professional experience. 

## The setup
The setup is a fairly simple one, which is outlined below. The code is available here: https://github.com/Wemunity/project.git. Pushing anything to the development branch will trigger a build on the staging server, push anything to the master branch will trigger a build on the prod server.
#### Development: 		https://wemunity-dev.herokuapp.com/
#### Prod: 			    https://wemunity.org/

### Project structure
The project has two parts. “Studio” and “web”. Studio is the local instance of Sanity where you build your content models and deploy those to the online instance. The local and online instances are synced. Web folder contains the frontend.

### Frontend
The frontend is built with Create React App. 
The css is built with sass. 
State is handled with Redux.

Run front-end from web folder with 
npm run start 	// appears on localhost:3000

#### Important folders
/src/pages		// static one off pages
/src/components	// rest of the react components
/src/assets		// static assets available buildtime
/src/styles		// scss style sheets

### Sanity CMS
The schemas (database models) are located in the /schemas folder. The rest of the files should be left alone. Any changes to the schema folder will instantly reload the local instance of sanity if its running.

Run local sanity instance from studio folder with 
sanity start 		// appears on localhost:3333

Deploy changes to have effect online 
npm run sanity-deploy

Manage sanity here:
https://manage.sanity.io/projects/nozluz6d

Manage sanity content here:
https://wemunity.sanity.studio/


### Heroku (hosting)
Prod:
https://dashboard.heroku.com/apps/wemunity
Deploys from master branch

Staging:
https://dashboard.heroku.com/apps/wemunity-dev
Deploys from development branch
