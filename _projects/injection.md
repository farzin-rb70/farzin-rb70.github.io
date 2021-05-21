---
name: controller of PLA injectin machine
tools: [C, STM32, PartoPajoohAyandeh]
image: ../pic/injection.jpeg
description: PCB design and component librery for STM32F103
---

# controller of PLA injectin machine

In this project we use STM32F103 microcontroller for reading the termocuple ,read isolated array input, controle the linear motor with realTime FB, read ruller (ADC 12 bit) , lcd HMI with serial interface , and use esp8266 for log and remote controll.

termocuple have a isolated interface designing and we used fast signal isolator, and only one termocuple ic!!! 
![preview](../pic/injection.jpeg)

