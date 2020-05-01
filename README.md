# Django template

This template creates a simple template structure with django and npm.

## Structure

```
django-environ-template
├── Pipfile
├── README.md
├── assets
│   ├── app.js
│   ├── css
│   ├── img
│   └── js
│       └── index.js
├── config
│   ├── __init__.py
│   ├── settings
│   │   ├── __init__.py
│   │   ├── base.py
│   │   └── platform
│   │       ├── dev.py
│   │       ├── local.py
│   │       └── prod.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── package.json
├── project_name
│   └── __init__.py
└── webpack.config.js
```

## Installation

```
$ django-admin startproject <project_name> \
    --template https://github.com/seanbermejo/django-environ-template/tarball/master \
    --extension=py,json
$ cd project
$ pipenv install
```

## Configuration

To add some `env` configurations, modify `.env` to add environment variables.

```
# .env

ALLOWED_HOSTS=*
DEBUG=False
```

## Create app on project

```
$ cd <project_name>
$ django-admin startapp my_app
# modify 'my_app/apps.py'
# add the <project_name>
$ vi my_app/apps.py
from django.apps import AppConfig

class MyAppConfig(AppConfig):
    name = "<project_name>.my_app"
```

## Install packages

```
$ pipenv install
$ npm i
```


## Start server

```
$ python manage.py runserver
```
