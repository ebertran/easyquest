[![Skylab-coders](https://mtzfactory.github.io/logos/png/skylab-coders.png)](http://www.skylabcoders.com/)
[![nodejs](https://mtzfactory.github.io/logos/png-2/nodejs.png)](https://nodejs.org/)
[![express](https://mtzfactory.github.io/logos/png-2/express.png)](http://expressjs.com///)
[![html-5](https://mtzfactory.github.io/logos/png-2/html-5.png)](https://www.w3.org/)
[![css-3](https://mtzfactory.github.io/logos/png-2/css-3.png)](https://www.w3.org/)
[![ecmascript 6](https://mtzfactory.github.io/logos/png-2/javascript.png)](https://www.w3.org/)
[![MongoDB](https://mtzfactory.github.io/logos/png-2/mongodb.png)](https://www.mongodb.com/)
[![Bootstrap](https://mtzfactory.github.io/logos/png-2/bootstrap.png)](http://getbootstrap.com/)
[![React](https://mtzfactory.github.io/logos/png-2/react.png)](https://reactjs.org/)
<img src="https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png"  alt="npm" href="https://www.npmjs.com/" width="86" height="36" />

# [Quezaurus](http://fast-refuge-98306.herokuapp.com/#/)

<!-- ## Screenshoots


![Screenshot](#.png)

### Create your own quizs
![realtime](#.png)

### Let people answer them
![realtime](#.png)

### Data Visualitzation
![dataviz](#.png) -->

---
## Description

Quezaurus is a quiz creator app where users can create their own questionnaires and post them online. Users also can respond questionnaries created by others. You just need to register, pick an Avatasaurus and start creating and answering quizs!

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/)

---
### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3001
  ```

- Mongodb path and database to use:

  ```
  DB_URL=mongodb://localhost:27017/quezaurus
  ```
  
---

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically

## API

The server part has multiple **API endpoints** using several routes:

- `/users` -> Serves the internal data of users.
- `/quizs` -> Serves the internal data of questionnaries.

---

## Built with:

- **Front-end**

    - react: 16.0.0
      - react-dom: 16.0.0
      - react-router-dom: 4.2.2
      - react-scripts: 1.0.14
    - axios: 0.17.1
    - uuid: 3.1.0

- **Back-end**

    - body-parser: 1.18.2
    - dotenv: 4.0.0
    - express: 4.16.2
    - mongodb: 2.2.33
    - mongoose: 4.13.0
---

## Author

[Enric Bertran](https://github.com/ebertran)

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)