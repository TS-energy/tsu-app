# Generated by Django 3.2.7 on 2022-02-23 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Transports',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transport_name', models.CharField(max_length=100)),
                ('carbon_dioxide_emsission', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
