# Generated by Django 3.1.5 on 2021-08-18 16:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('address', '0001_initial'),
        ('watermeter', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Dwelling',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('full_address', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='address.fulladdress')),
            ],
            options={
                'db_table': 'agube_dwelling_dwelling',
            },
        ),
        migrations.CreateModel(
            name='Paymaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_type', models.TextField(choices=[('BANK', 'Bank'), ('CASH', 'Cash'), ('EXEMPT', 'Exempt')], default='BANK')),
                ('iban', models.TextField(null=True)),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('dwelling', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='dwelling.dwelling')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'agube_dwelling_paymaster',
            },
        ),
        migrations.CreateModel(
            name='DwellingWaterMeter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dwelling', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='dwelling.dwelling')),
                ('water_meter', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='watermeter.watermeter')),
            ],
            options={
                'db_table': 'agube_dwelling_dwelling_water_meter',
                'ordering': ['water_meter__release_date'],
            },
        ),
        migrations.CreateModel(
            name='DwellingResident',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('dwelling', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='dwelling.dwelling')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'agube_dwelling_resident',
            },
        ),
        migrations.CreateModel(
            name='DwellingOwner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('dwelling', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='dwelling.dwelling')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'agube_dwelling_owner',
            },
        ),
    ]
