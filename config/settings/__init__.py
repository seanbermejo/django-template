import os
import sys

import environ
from split_settings.tools import include, optional

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
base = environ.Path(__file__) - 3
BASE_DIR = base()

env = environ.Env()
if os.path.exists(base(".env")):
    env.read_env(base('.env'))
    print(f'Loading env file: f{base(".env")}')

if os.getenv("DJANGO_SETTINGS_MODULE") == "config.settings":
    platform = env.str("PLATFORM", default="local")

    include(
        "base.py",
        "drf.py",
        optional(os.path.join("platform", f"{platform}.py")),
        scope=globals(),
    )

# Covers regular testing and django-coverage
tests = [
    "test",
    "test_coverage",
    "pytest",
]
TESTING = any(t in "".join(sys.argv) for t in tests) or env.bool(
    "TESTING", default=False
)
# Use this to set models to managed=True by settings
# MANAGED=true
# to .env file
# If running tests this defaults to True
MANAGED = TESTING or env.bool("MANAGED", default=False)
if TESTING:
    include(optional("tests.py"),)
