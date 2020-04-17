# Generated by Django 2.1.7 on 2019-03-19 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pages", "0003_branch_mentor"),
    ]

    operations = [
        migrations.CreateModel(
            name="ContactDetails",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="", max_length=100)),
                ("photo", models.ImageField(max_length=200, upload_to="members/")),
                (
                    "facebook",
                    models.URLField(blank=True, db_index=True,
                                    max_length=1000),
                ),
                (
                    "linkedin",
                    models.URLField(blank=True, db_index=True,
                                    max_length=1000),
                ),
                ("branch", models.CharField(default="", max_length=100)),
                ("year", models.CharField(default="", max_length=100)),
                ("mobile", models.CharField(default="", max_length=100)),
                ("email", models.CharField(default="", max_length=100)),
            ],
        ),
    ]
