from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    producing_company = models.CharField(max_length=100)
    release_year = models.CharField(max_length=100)
    remarks = models.TextField()

    def __str__(self):
        return self.title
    

