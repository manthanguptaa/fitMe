# FitMe


## Click on the video for demo
[![Demo Link](https://img.youtube.com/vi/wFuXVfeVnHQ/0.jpg)](https://www.youtube.com/watch?v=wFuXVfeVnHQ)


## What's our Solution?

FitMe is an AI-enabled fitness application which gives you the luxury of exercising or performing yoga asanas from the comfort of your home. 

With the help of tensorflow, we are able to estimate the user’s pose and compare it to the ideal pose to generate an accuracy score which helps the user determine if they are doing the exercise or asanas the right way or not. 

This eliminates the need for any trainer or expert’s intervention to know the correct technique for performing yogasanas and rectifying them. You just need your laptop which has a webcam to run this awesome application! The massive library of poses makes it perfect for everyone, be it beginners or professionals. 

## Working Explained

![FitMe Flowchart](https://user-images.githubusercontent.com/42516515/98796679-a8dd3980-2431-11eb-8c37-689aa42fd8b3.png)


## Project Snippets

![home](https://user-images.githubusercontent.com/42516515/98462694-24de4400-21dc-11eb-95c1-0cb571b87b46.PNG)
![home2](https://user-images.githubusercontent.com/42516515/98462697-260f7100-21dc-11eb-9e01-4c5f4c5ae10e.PNG)
![signup](https://user-images.githubusercontent.com/42516515/98462700-27d93480-21dc-11eb-8406-eea32e96c582.PNG)
![login](https://user-images.githubusercontent.com/42516515/98462701-290a6180-21dc-11eb-84a3-de04a3efc734.PNG)
![dashboard](https://user-images.githubusercontent.com/42516515/98462703-2ad42500-21dc-11eb-8454-aaecbbc2bee8.PNG)
![1](https://user-images.githubusercontent.com/42516515/99896382-29176080-2cb6-11eb-8c7c-ff29e0e4a40f.PNG)
![5](https://user-images.githubusercontent.com/42516515/99896397-35032280-2cb6-11eb-950c-ec0842c89707.PNG)
![3](https://user-images.githubusercontent.com/42516515/99896393-2ddc1480-2cb6-11eb-88cd-f447a751c672.PNG)

## Requirements

For development, you will need Node.js and a node global package, Yarn, installed in your environement.
You also need to setup Firebase before running the project.
You will also need to setup Firebase to be able to run the project. Without setting up the firebase you will just see white screen.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/Manthan109/fitMe.git
    $ cd fitMe
    $ yarn install  or  npm install


## Running the project

    $ yarn start or npm start

## Simple build for production

    $ yarn build or npm build
