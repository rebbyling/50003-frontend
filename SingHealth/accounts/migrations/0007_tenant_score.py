# Generated by Django 3.1.7 on 2021-03-20 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_remove_tenant_score'),
    ]

    operations = [
        migrations.CreateModel(
            name='tenant_score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('score', models.IntegerField()),
            ],
        ),
    ]
