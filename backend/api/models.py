from django.db import models

class HouseData(models.Model):
    crim = models.FloatField()
    zn = models.FloatField()
    indus = models.FloatField()
    chas = models.CharField(max_length=1)
    nox = models.FloatField()
    rm = models.FloatField()
    age = models.FloatField()
    dis = models.FloatField()
    rad = models.IntegerField()
    tax = models.FloatField()
    ptratio = models.FloatField()
    b = models.FloatField()
    lstat = models.FloatField()
    medv = models.FloatField()

    def __str__(self):
        return f'{self.medv}k - {self.rm} rooms - located at index {self.pk}'
