DEBUG = True

if env.str("DATABASE_URL", ""):
    DATABASES = {
        "default": env.db(),  # noqa F821
    }
