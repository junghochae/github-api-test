import serial
import paho.mqtt.client as mqtt
import sys
import threading
from time import sleep
import json

################################
# lib_topic = []
# mqtt param
# global lib_mqtt_client
global lib
global lib_topic
#lib_topic = ['/keti']
broker_ip = 'localhost'
port = 1883

#missionPortNum = '/dev/ttyUSB3'
#missionBaudrate = 9600

global lib_mqtt_client
lib={}
#missionPortNum = lib.serialPortNum
#missionBaudrate = lib.serialBaudrate
lteQ = {}
sleep_sec = 1