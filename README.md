# SheSharp 2023 Hackathon React.js base example / boilerplate

_This boilerplate was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Some CRA files have been removed and cleaned up to provide a simple starting place._

# hackathon-2023.react-js.base-example

This is a React.js website that fetches and renders data from a static JSON file. It is a slab of marble, waiting for its Michelangelo. There are many winding paths on the journey to building a web application. This simple boiler plate is a great choice for Choose Your Own Adventure enthusiasts.

More practically the code is written in CSS, Javascript, HTML and JSX (a syntax love-child of the former three). It uses the Fetch API to get JSON data and JSX to render that data. It also has some basic features of the React.js framework, such as hooks, state, and a React event handler. There is a single predefined component - a Button. This button triggers the fetch when clicked.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
    - [1) Fork the repository](#forking-the-repository)
    - [2) Clone the repository](#cloning-the-repository)
    - [3) Install dependencies](#installing-dependencies)
- [Usage](#usage)
    * [Inspect the GitHub Action execution logs](#inspect-the-github-action-execution-logs)
    * [Run the script.js directly from your local machine](#run-the-scriptjs-directly-from-your-local-machine)
- [How this project works](#how-this-project-works)
    * [Scheduled GitHub Workflow](#scheduled-github-workflow)
    * [The scheduled script written in JavaScript](#the-scheduled-script-written-in-javascript)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you can install, use this project and add extra functionalities to it, you need to have the following prerequisites and software installed on your computer:

- **A personal GitHub account**. If you don't already have one, you can sign up for free [here](https://github.com/).
- **Git**: this is a version control system that allows you to manage and track changes to your code. You can download and install Git from the official website [here](https://git-scm.com/downloads).
- **A terminal**: this is the application that allows you to enter commands into your computer. You can use the default terminal on your operating system, or install a third-party terminal such as [iTerm2](https://iterm2.com/) for macOS or [Windows Terminal](https://aka.ms/terminal) for Windows.
- **A code editor**: this is the application that allows you to write and edit code. A [Visual Studio Code](https://code.visualstudio.com/).
- **JavaScript**: this is the programming language used in this project. You don't need to install it separately, as it comes pre-installed with most web browsers.
- **Node.js ***: this is a JavaScript runtime environment that is necessary to run Create React App. It comes with npm, a package manager that will install dependencies. [Node.js here](https://nodejs.org/en)
- **Optional: Google Chrome**: Google Chrome is a web browser with useful developer tools. [Google Chrome Web Browser](https://www.google.com/chrome/)

Once you have all of these prerequisites, you're ready to move on to the installation steps.

## Installation

To install and make this React project your own, you need to fork this repository to your own GitHub account and then clone your forked repository to your local machine.

### 1) Fork the repository

1. Go to the repository page on GitHub: [https://github.com/shesharpnl/hackathon-2023.react-js.base-example](https://github.com/shesharpnl/hackathon-2023.react-js.base-example).  

2. Click the "Fork" button in the top right corner of the repository page. This will create a copy of the repository in your own GitHub account.

### 2) Clone the repository

1. Once you have forked the repository, navigate to the forked repository on your GitHub account: [https://github.com/YOUR_USERNAME/hackathon-2023.react-js.base-example](https://github.com/YOUR_USERNAME/hackathon-2023.react-js.base-example). Replace `YOUR_USERNAME` with your GitHub username.

2. Click the "Code" button and copy the HTTPS or SSH link to the repository.

3. Open your terminal and navigate to the directory where you want to store the project. For example: `cd ~/projects`.

4. Type `git clone` followed by the repository link you copied earlier, then press Enter (remember to replace `YOUR_USERNAME` with your GitHub username):

```
git clone https://github.com/YOUR_USERNAME/hackathon-2023.react-js.base-example.git
```

5. Press Enter again to execute the command. This will download the repository to your local machine. If you are cloning the repository using HTTPS, you may be prompted to enter your GitHub username and password. 
If you are cloning the repository using SSH, you will need to set up authentication via SSH. You can find instructions for doing so [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). Once you have set up authentication via SSH, you can clone the repository using the SSH URL.

### 3) Install dependencies

Open the root folder of your locally cloned project in your code editor. Start a new terminal and run the command  

`npm install`

Nice! You're ready to start coding.

## Usage

This is what the starting boilerplate looks like:

![Screenshot of the index page in the web browser.](./images/slack-messages.png)

### See it yourself: Run the development environment from your terminal

To verify that the project works by viewing it in your browser, follow these stpes.

1. Open the root folder of your project in your code editor.
2. Open a new terminal in your code editor. Type the command `npm run start`
3. In the "Jobs" section, you should see a job called `post_job_to_slack`. Click on it to view the details of that job.
4. In the job details, you should see a list of steps that were executed. The last step should be `Post random job`. Click on that step to view its logs.
5. In the logs, you should see the output of the script that was executed. Look for the line that says `Slack response: 200 OK`. This indicates that the script was able to successfully post the job to Slack.
6. You can also look for any error messages in the logs to identify any issues that may have occurred during the execution of the script.

You should be able to see something like this:

![Screenshot of the index page in the web browser with the developer tools open.]()

If you encounter any issues, you can try the following steps to troubleshoot:  

1. 

### Make changes and see updates

Running the script locally allows you to test and debug the script without having to commit and push changes to the GitHub repository, which can save time and make the development process more efficient. It also allows you to test the script using different data or configurations that may not be available in the GitHub environment.

How to run the `script.js` file locally:  

1. Open your terminal and navigate to the cloned repository:
```
cd hackathon-2023.slack-bot.base-example
```
2. In your terminal, set the `SLACK_WEBHOOK_URL` environment variable to the copied webhook URL:
```
export SLACK_WEBHOOK_URL=<copied-webhook-url>
```
Note: This step is only for Unix-based systems. If you're using Windows, you can set the environment variable using the System Properties window.
3. Run the script by running:
```
node script.js
```
This will fetch job data from the specified URL, generate a Slack payload based on a random job, and post the payload to the incoming webhook URL you set up in the previous steps.

That's it! You should now be able to run the script and post a random job to the Slack channel.

![Screenshot of the script executed using your terminal](./images/executing-script.png)

## How this project works

### React.js

GitHub Workflows are a feature of GitHub Actions that allow developers to create custom workflows that are triggered by specific events or scheduled to run at specific times. In this project, a scheduled workflow is used to run the bot every 5 minutes. This workflow is defined in a YAML file and specifies the job that needs to be run and when it should be run.

To learn more about GitHub Actions and Workflows, you can check out the official documentation:

**GitHub Actions**: https://docs.github.com/en/actions  
**GitHub Workflows**: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions    

Let's have a look at the GitHub Workflow used as part of this project.  
You can find the GitHub workflow here: `.github/workflows/post-to-slack.yaml`.


In summary, this GitHub Actions file sets up a job that runs every 5 minutes on an Ubuntu environment, sets up Node.js version 18, checks out the repository, and runs a script that posts a random job to Slack using the `SLACK_WEBHOOK_URL` environment variable.

### The Fetch API

You can find the JavaScript file here: `script.js`.  
This JavaScript file is used in the GitHub workflow to post a random job to a Slack channel.  

The JavaScript file contains three functions:

- `getRandomJob(jobs)`: This function takes an array of jobs and returns a random job from the array.

- `generateSlackPayload(job)`: This function takes a job object and generates a Slack payload using a Slack block kit. The payload contains the job name, and the color of the attachment is set to `#00b29a`.

- `postJobToSlack(webhookUrl, payload)`: This function takes a webhook URL and a payload and posts the payload to the Slack channel using a `fetch()` request. 


## Contributing

Contributions to this project are welcome! If you find a bug, have a feature request, or want to contribute code, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes: `git checkout -b my-branch-name`
3. Make your changes, and test them thoroughly.
4. Commit your changes with a descriptive commit message.
5. Push your changes to your forked repository: `git push origin my-branch-name`
6. Open a pull request against the main branch of this repository, explaining the changes you've made and why they are important.

Note that this project uses GitHub Actions to automatically post a random job to a Slack channel every 5 minutes, based on data fetched from a remote JSON file. If you want to contribute with new job postings, please add it to the appropriate JSON file in the `assets` directory and submit a pull request.

Thank you for your contributions!

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Available Scripts

You can run these from the command line of your project to see how your application is coming along. These ar

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

