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

Checkout our [wiki](https://github.com/ride-tandem/Tandem/wiki)

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

## Running a Development Server

While in the `frontend` directory run `npm install` to install dependancies.

This application uses Firebase services that need to be emulated locally. Run `npm run emulators` to start the emulators. You can view the firebase console at localhost:3001.

To start developing run `npm start`. This should open your default browser to the application. Change a file and save it and the application should reload.

# License

We're GPL-3.0 licensed, if you don't like the license in [its full glory](https://www.gnu.org/licenses/gpl-3.0.en.html), [this](https://choosealicense.com/licenses/gpl-3.0/) is a nice synopsis.
