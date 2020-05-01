# Django-Environ template

This template creates a simple template structure with django-environ. 

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
│   │       └── local.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── webpack.config.js
```

## Installation

```
$ django-admin startproject project --template https://github.com/seanbermejo/django-environ-template/tarball/master --extension=py,json
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

## Initialize package.json

```
$ npm init
```

## Create app on projects

There's a template for creating app inside `project_name` directory.
```
$ cd <project_name>
$ django-admin startapp <your_app> --template=app_template.tgz
```
