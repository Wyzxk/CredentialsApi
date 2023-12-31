# Generated by Django 4.2.4 on 2023-10-25 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('credentials', '0007_delete_credential'),
    ]

    operations = [
        migrations.CreateModel(
            name='Credential',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('lastname', models.CharField(max_length=30)),
                ('code', models.IntegerField()),
                ('blood', models.CharField(max_length=5)),
                ('degree', models.CharField(max_length=20)),
                ('mail', models.EmailField(max_length=254)),
                ('phone', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('image', models.ImageField(null=True, upload_to='images')),
            ],
        ),
    ]
