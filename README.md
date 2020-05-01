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

## Create app on project

```
$ cd <project_name>
$ django-admin startapp my_app
```

## Install packages

```
$ pipenv install
$ npm i
```
