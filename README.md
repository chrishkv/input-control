# Control de entradas / Input control

Este proyecto es solo saber qué empleados han estado en la oficina en el mismo período de tiempo, el objetivo de este ejercicio es generar una tabla que contenga pares de empleados y la frecuencia
con la que han coincidido en la oficina.

La información de entrada será el nombre de un empleado y el horario que trabajó, indicando el
tiempo y las horas.

This project is just to know which employees have been in the office in the same period of time, the objective of this exercise is to generate a table containing pairs of employees and the frequency
with which they have coincided in the office.

The input information will be the name of an employee and the hours worked, indicating the
time and hours.

# Instalación / Installation
Solo debe colocar el archivo index.html y inputControl.js en la carpeta del servidor y acceder localhost o dirección url de su dominio.

You just need to put the index.html and inputControl.js file in the server folder and access localhost or url of your domain.

$ git clone https://github.com/chrishkv/input-control.git  
$ cp index.html inputControl.js /opt/lampp/htdocs/

# Ejecutando las pruebas / Running the tests
El proyecto solo recibe un archivo de tipo txt, la data debe estar en el formato siguiente:

The project only receives a file of type txt, the data must be in the following format:

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

El resultado de salida es:

The output result is:  

RENE-ASTRID: 2  
RENE-ANDRES: 2  
ASTRID-ANDRES: 3

# Explicación de solución / Solution explanation

Se lee el archivo de texto y se va separando por línea, por persona, por hora de entrada y de salida, se comparan las personas de acuerdo a los días registrados que coinciden y de acuerdo a eso se comparan las horas registradas, comparando los rangos de entrada y de salida de las personas.

The text file is read and it is separated by line, by person, by entry and exit time, the people are compared according to the registered days that coincide and according to that the registered hours are compared, comparing the ranges entry and exit of people.

# Tecnologias / Technologies
HTML  
Javascript

# Autor / Author
Christian Valdivieso [chrishkv](https://github.com/chrishkv)
