# Generated by Django 5.0.7 on 2024-07-28 02:11

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0003_aigenerations"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="aigenerations",
            name="generation",
        ),
    ]
