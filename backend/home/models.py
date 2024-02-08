from django.conf import settings
from django.db import models


class Articale(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
