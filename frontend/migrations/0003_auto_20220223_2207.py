# Generated by Django 3.2.7 on 2022-02-23 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_gas'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Gas',
        ),
        migrations.DeleteModel(
            name='Transports',
        ),
    ]
