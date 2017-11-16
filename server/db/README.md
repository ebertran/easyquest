### From / to a json array file and a local server

```bash
$ mongoimport -d quezaurus -c quizs --drop --jsonArray --file data/quizs.json

$ mongoexport -d quezaurus -c quizs --jsonArray -o data/quizs-exported.json
```

```bash
$ mongoimport -d quezaurus -c users --drop --jsonArray --file data/users.json

$ mongoexport -d quezaurus -c users --jsonArray -o data/users-exported.json
```
