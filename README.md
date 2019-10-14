# [Angular 8+ builder - file remover](https://github.com/BojanKogoj/ng-builder-file-remover)

![CircleCI](https://img.shields.io/circleci/build/github/BojanKogoj/ng-builder-file-remover?style=flat-square)
![npm](https://img.shields.io/npm/v/ng-builder-file-remover?style=flat-square)
![NPM](https://img.shields.io/npm/l/ng-builder-file-remover?style=flat-square)


Angular builder that removes specified files and folders.

## Usage

Install library in project root

```sh
npm i -D ng-builder-file-remover
```

In angular.json add configuration under architect
```json
"file-remover": {
    "builder": "ng-builder-file-remover:remove",
    "options": {
        "files": [
            "todelete.txt",
            "random_folder"
        ]
    }
},
```

And run it
```sh
ng run [project-name]:file-remover
```

This should output something similar to
```sh
> ng run builder-example:file-remover
Starting file removing
Deleted todelete.txt
Deleted random_folder
✔ Removing files finished successfully
```

## Development

To build run

```sh
npm install
npm run build
```

For testing you need to use existing or create a new Angular 8+ project

For creating a new project simply use

```sh
ng new remover-test-project
```

Go inside the project and inside `angular.json` under architect add path locally to the project.

```json
"file-remover": {
    "builder": "../ng-builder-file-remover:remove",
    "options": {
        "files": [
            "file.txt"
        ]
    }
},
```

Run the command

```sh
ng run remover-test-project
```
