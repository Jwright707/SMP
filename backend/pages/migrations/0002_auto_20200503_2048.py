# Generated by Django 2.1.7 on 2020-05-03 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_squashed_0035_auto_20200502_2017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentteam',
            name='branch',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, related_name='teams', to='pages.Branch'),
        ),
    ]
