<div align="center">
  <h1> 
    <img alt="fableverse logo" src="https://user-images.githubusercontent.com/34040658/166625392-dcec9672-fd76-4914-a991-715c58cdd3c5.png" width="100px"/><br/>
    Discord Bot Template 
  </h1>
  <h4> A template for building Discord bots with Discord.js </h4>
  
  <a href="https://github.com/Fableverse/api-template/releases"
    ><img
      src="https://img.shields.io/github/workflow/status/fableverse/base-template/Run Jest?color=white&label=build&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <a href="https://github.com/Fableverse/api-template/releases"
    ><img
      src="https://img.shields.io/github/v/tag/fableverse/base-template?color=white&label=version&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <a href=""
    ><img
      src="https://img.shields.io/github/commit-activity/w/fableverse/base-template?color=white&label=commit activity&style=flat-square"
      alt="GitHub Latest Version"
  /></a>
  <br />
  <a href="https://discord.gg/5a9bSRyYyF"
    ><img
      src="https://img.shields.io/discord/966144993163091988?label=discord&color=blue&style=flat-square"
      alt="Chat on Discord"
  /></a>
  <a href="https://twitter.com/Fableverse"
    ><img
      src="https://img.shields.io/badge/twitter-@fableverse-1DA1F3?color=blue&style=flat-square"
      alt="Follow @Fableverse on Twitter"
  /></a>
</div>

## 📖 Table of Contents
- [Features](#-features)
- [Packages](#-packages)
- [Quick Setup Guide](#-quick-setup-guide)
- [Projects using this Template](#-projects-using-this-template)
- [Reporting a Bug or Issue](#-reporting-a-bug-or-issue)
- [Contributing](#-contributing)
- [License](#-license)

## 💡 Features
Reason for this project/template
- A cool feature

### What is Blank and why use it?
TBD

## 📦 Packages

| Package         | Description                           | Links          |
| --------------- | ------------------------------------- | -------------- |
| A package       | A description                         | [Website](), [Docs]() |

## 🚀 Quick Setup Guide
### Prerequisites
- [Git](https://gitforwindows.org/), for cloning and interacting from GitHub

### Setup
Clone the project from Github, locally using 

```
git clone https://github.com/Fableverse/api-template.git
```

Run NPM install from your terminal
```
npm i
```

If you are planning to use mongodb, you will need to create a `.env` file at the root of the codebase, with the following:
```env
# Set to production when deploying to production
NODE_ENV=development

# Node.js server configuration
PORT=8000

# MongoDB configuration
MONGO_CONNECTION_STRING=mongodb://localhost:27017/testing
```
The mongodb connection will have to be changed depending on where you have it hosted, let it be locally or in the cloud. Right now, this is pointed to a local mongo database.

To run the project, run:
```
npm start
```

To run the jest tests in the project, run:
```
npm test
```

## 🏠 Projects using this template
Will be updated, once projects are built.

## 📞 Reporting a Bug or Issue
Create a new [Issue](https://github.com/Fableverse/base-template/issues) directly in this repository utilizing the "Bug Report" template.

## 🤝 Contributing
Please reference the [Code of Conduct](https://github.com/Fableverse/base-template/blob/main/CODE_OF_CONDUCT.md) for this repository.

When you are looking to contribute new code, you will want to create a fork for the changes, and than create a pull request into the original repository. More information on that process can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## 📝 License
Copyright © 2022 Fableverse

This project is [GPL](https://github.com/Fableverse/base-template/blob/main/LICENSE) licensed.
