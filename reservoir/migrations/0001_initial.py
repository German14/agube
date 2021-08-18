# Generated by Django 3.1.5 on 2021-08-18 16:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('watermeter', '0001_initial'),
        ('address', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservoir',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('capacity', models.DecimalField(decimal_places=3, max_digits=8)),
                ('inlet_flow', models.DecimalField(decimal_places=3, max_digits=8)),
                ('outlet_flow', models.DecimalField(decimal_places=3, max_digits=8)),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('full_address', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='address.fulladdress')),
            ],
            options={
                'db_table': 'agube_reservoir_reservoir',
            },
        ),
        migrations.CreateModel(
            name='ReservoirWaterMeter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reservoir', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='reservoir.reservoir')),
                ('water_meter', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='watermeter.watermeter')),
            ],
            options={
                'db_table': 'agube_reservoir_reservoir_water_meter',
                'ordering': ['water_meter__release_date'],
            },
        ),
        migrations.CreateModel(
            name='ReservoirOwner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_date', models.DateTimeField()),
                ('discharge_date', models.DateTimeField(null=True)),
                ('reservoir', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='reservoir.reservoir')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'agube_reservoir_reservoir_owner',
            },
        ),
    ]
