# Generated by Django 2.1.7 on 2020-02-23 17:13

from django.db import migrations, models
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0009_auto_20191127_0300'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=150)),
                ('date', models.DateField(blank=True, null=True)),
                ('time', models.TimeField(blank=True, null=True)),
                ('thumbnail', models.ImageField(blank=True, max_length=200, null=True, upload_to='events/')),
                ('venue', models.CharField(default='', max_length=100)),
                ('content', tinymce.models.HTMLField()),
            ],
        ),
    ]
