# Generated by Django 4.2.4 on 2023-10-25 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credentials', '0008_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='credential',
            name='phone',
            field=models.BigIntegerField(),
        ),
    ]
