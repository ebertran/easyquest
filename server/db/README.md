### From / to a json array file and a local server

```bash
$ mongoimport -d quezaurus -c users --drop --jsonArray --file data/users.json

$ mongoexport -d quezaurus -c users --jsonArray -o data/users-exported.json
```

```bash
$ mongoimport -d quezaurus -c quizs --drop --jsonArray --file data/quizs.json

$ mongoexport -d quezaurus -c quizs --jsonArray -o data/quizs-exported.json
```

### From / to a json array file and a remote server (mLab)

mongodb://user:<dbpassword>@ds255455.mlab.com:55455/skylab

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d skylab -c users -u user -p <password> --drop --jsonArray --file data/users.json

$ mongoexport -h ds255455.mlab.com:55455 -d skylab -c users -u user -p <password>  --jsonArray -o data/users-exported-from-mlab.json
```

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d skylab -c quizs -u user -p <password> --drop --jsonArray --file data/quizs.json

$ mongoexport -h ds255455.mlab.com:55455 -d skylab -c quizs -u user -p <password>  --jsonArray -o data/quizs-exported-from-mlab.json
```
