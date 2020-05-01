# Include production specific settings here
DEBUG = False

if env.str("DATABASE_URL", ""):
    DATABASES = {
        "default": env.db(),  # noqa F821
    }
