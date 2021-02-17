<h1 align="center">
	<img alt="Logo" src="../.github/logo.svg" width="70px" />
</h1>

<h3 align="center">
  Proffy API - find a teacher for you where you are whenever you want.
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jhonpedro/proffy">

  <a href="https://github.com/jhonpedro">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-joao%20pedro-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jhonpedro/proffy">
  
  <a href="https://github.com/jhonpedro/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jhonpedro/proffy">
  </a>
  
  <a href="https://github.com/jhonpedro/proffy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jhonpedro/proffy">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">This is the server part of the whole project, so here you can find some business rules, and see how the project works under the table</p>

- In this API project i tried to follow an architecture separating queries from the controllers, i liked how things got a little easier.

To see the **API client**, click here: [proffy WEB](https://github.com/jhonpedro/proffy/tree/master/backend)</br>
To see the **Mobile project**, click here: [proffy MOBILE](https://github.com/jhonpedro/proffy/tree/master/mobile)</br>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://www.npmjs.com/package/multer)
- [Knex](https://www.npmjs.com/package/knex)
- [Postgres](https://www.postgresql.org/)
- [cors](https://www.npmjs.com/package/cors)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Sharp](https://www.npmjs.com/package/sharp)

## 💻 Getting started

See below how you can start using the project

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) and [DockerCompose](https://docs.docker.com/compose/install/)

If you're on windows or mac and have docker, you already have included some technologies and docker compose is one of them.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/jhonpedro/proffy && cd proffy
```

```bash
  This "&&" above do not work on windows, you will have to change it for ";"
```

**Follow the steps below**

```bash
#Before you run docker-compose you have fill the ".env.example" and change it's name to just ".env"

# Run docker-compose
$ cd /backend
$ docker-compose up -d

# Well done, the API project it is started!
# Yeah that's it Docker make things so easy 😭😭😭!

# Now go to the Web project!!!
```

> I'm using this template [here](https://github.com/EliasGcf/readme-template/tree/master/templates)
