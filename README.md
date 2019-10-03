# Angular 8+ builder - file remover

Angular builder that removes specified files and folders.

## Usage

Install library in project root

```sh
npm i -D ng-builder-file-remover
```

In angular.json add configuration under architect
```sh
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

```sh
npm install
npm run build
```
