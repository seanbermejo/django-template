# Django template

This template creates a simple template structure with django.

## Structure

```
django-template
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
    --template https://github.com/seanbermejo/django-template/archive/master.tar.gz \
    --extension=py,json
$ cd <project_name>
$ poetry install
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
# Inside the project directory <project_name>
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
