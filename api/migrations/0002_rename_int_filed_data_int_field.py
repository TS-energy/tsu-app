# Generated by Django 3.2.7 on 2021-09-07 17:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='data',
            old_name='int_filed',
            new_name='int_field',
        ),
    ]
