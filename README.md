# Django-Environ template

This template creates a simple template structure with django-environ. 

## Structure

```
- config/
 - settings/
   - __init__.py
   - base.py
   - platforms/
     - local.py
 - urls.py
 - wsgi.py
- manage.py
```

## Installation

```
$ django-admin startproject project --template https://github.com/seanbermejo/django-environ-template/tarball/master
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
