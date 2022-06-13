<p align="center">
<img src="https://user-images.githubusercontent.com/74685702/162538917-e1aa138c-6e03-4f93-92ed-8335828d2a52.svg" width="200" height="200"/>
</p>

<h1 fontSize="50" align="center"> Tandem. </h1>

<h3 align="center">
Carpooling made easy.
</h3>

<h3 align="center">
Carpooling made social.
</h3>

<h4 align="center">
Check out our live application page at: <a href="https://ride-tandem.ca">ride-tandem.ca</a>
</h4>

<p align="center">
<img src="https://user-images.githubusercontent.com/74685702/162544210-51bd424b-2a56-43a8-82cc-acf4e0fbf9c4.png" width="200">
</p>

<h4 align="center">Watch the demonstation video <a href="https://youtu.be/tKx8-qhpNMk">here</a></h4>

# Members

Contact us with a bug or suggestion by making an issue.

Checkout [who built this](https://github.com/CobeyH/SENG-480A/wiki/Team-Contributions) application on our [wiki](https://github.com/CobeyH/SENG-480A/wiki)

# Milestones

## Presentations

[Milestone 1](https://docs.google.com/presentation/d/1_4aRN1ntUCg57fo2Yi9Icr5uLC00o3nwxvoE6tQif-0/edit?usp=sharing)

[Milestone 2](https://docs.google.com/presentation/d/1xmXsBqUpmiAcZRO8HfMe55J8MQXNO3-oCCqqMlNhIt8/edit?usp=sharing)

[Milestone 3](https://1drv.ms/p/s!AsJ3sdz3anzTgkPNj37TMvn3wBi_?e=6fMSeM)

# Contributing

Try to make an issue before trying to fix it, you may find someone is already on it!

Barring that, make a pull request with your changes - we prefer, although do not enforce, a linear git history.

Someone _should_ come along and review your code, if it looks good your changes should be live as soon as they are merged!

## Dependancies

All that is needed to run it is [node](https://nodejs.org/en/). Make sure to add it is on your `PATH`.

### Installing Node

Of course downloading node off thier site and using their installer is an option. _But_ I recommend using

Windows - [chocolatey](https://chocolatey.org/)

MacOS - [brew](https://brew.sh/)

Linux - whatever package manager your distro comes with

### Verifying install

Run `node --version` in a terminal. The output should look something like

```
[marcus@fedora ~]$ node --version
v16.13.2
```

### Hitting MapQuest Api

This app relies on the MapQuest API for some features, in order to use them acquire a key from [here](https://www.mapquest.com/)
and create an `.env` file in `frontend` with `REACT_APP_MQ_KEY=<YOUR KEY>`.

## Running a Development Server

While in the `frontend` directory run `npm install` to install dependancies.

This application uses Firebase services that need to be emulated locally. Run `npm run emulators` to start the emulators. You can view the firebase console at localhost:3001.

To start developing run `npm start`. This should open your default browser to the application. Change a file and save it and the application should reload.

## Setting Up Testing

This project is tested using Cypress. The tests can be run locally by linking to the Firebase emulators.

To begin, create a new service account in the firebase console. Add the path to your serviceAccount.json file into your `GOOGLE_APPLICATION_CREDENTIALS` environment variable.

You will also need the UID of a testing user to authenticate your tests. Create a `cypress.env.json` file and add the UID of your user to the `TEST_UID` json key.

### Running the tests

First run `npm run emulators:CI` to run the emulators using the testing data in cypress-emulator-data.
Next run `npm start` to start the application.
Finally run `npm run cypress` to start cypress and select the spec files you want to test.

# License

We're GPL-3.0 licensed, if you don't like the license in [its full glory](https://github.com/CobeyH/SENG-480A/blob/main/LICENSE), [this](https://choosealicense.com/licenses/gpl-3.0/) is a nice synopsis.
