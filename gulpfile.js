var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsconfig = {
    "files": [
        "app/scripts/source/hello.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
};

var tsProject = ts.createProject("tsconfig.json");