import pywifi
import time
import os
import math
from scipy.optimize import minimize
import numpy as np
import platform

# (X, Y, Z) of each WAP
refrences = np.array(
    [0, 0, 0],
    [0, 0, 0], 
    ...
)

def get_current_ssid_windows():
    interface = pywifi.PyWiFi().interfaces()[0]  # Assuming you have at least one Wi-Fi interface
    connected_profiles = interface.scan_results()
    
    for profile in connected_profiles:
        if profile.bssid == interface.status().get('bssid'):
            return profile.ssid
    
    return None

def get_current_ssid_macos():
    interface = pywifi.PyWiFi().interfaces()[0]  # Assuming you have at least one Wi-Fi interface
    connected_ssid = os.popen(f"/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk -F: '/ SSID/ {{print $2}}'").read().strip()
    
    if connected_ssid:
        return connected_ssid
    
    return None

def get_current_ssid_linux():
    current_ssid = os.popen("iwgetid -r").read().strip()
    
    if current_ssid:
        return current_ssid
    
    return None

def get_wifi_rssi(ssid):
    wifi = pywifi.PyWiFi()
    iface = wifi.interfaces()[0]  # Assuming you have at least one Wi-Fi interface

    iface.scan()
    time.sleep(2)
    scan_results = iface.scan_results()

    for result in scan_results:
        if result.ssid == ssid:
            return result.signal

    return None

def get_tx_power_by_ssid(ssid):
    wifi = pywifi.PyWiFi()
    iface = wifi.interfaces()[0]  # Assuming you have at least one Wi-Fi interface

    iface.scan()
    iface.scan_results()
    profile = None

    for profile in iface.scan_results():
        if profile.ssid == ssid:
            break

    if profile is not None:
        return profile.signal
    else:
        return None
    
def get_frequency_by_ssid(ssid):
    wifi = pywifi.PyWiFi()
    iface = wifi.interfaces()[0]  # Assuming you have at least one Wi-Fi interface

    iface.scan()
    iface.scan_results()
    profile = None

    for profile in iface.scan_results():
        if profile.ssid == ssid:
            break

    if profile is not None:
        return profile.signal
    else:
        return None

def calculate_distance(rssi, tx_power, freq):
    # RSSI is the Received Signal Strength Indicator
    # tx_power is the transmission power of the WAP
    # freq is the frequency of the wireless signal (usually in MHz)

    # Calculate the free space path loss
    fspl = 20 * math.log10(freq) + 20 * math.log10(4 * math.pi) + 20 * math.log10(10)
    # Convert RSSI to dBm
    rssi_dBm = rssi - 30
    # Calculate the distance
    distance = 10 ** ((tx_power - rssi_dBm - fspl) / 20)
    return distance

def ips_solve(distances_to_wap, wap_coordinates):
	def error(x, c, r):
		return sum([(np.linalg.norm(x - c[i]) - r[i]) ** 2 for i in range(len(c))])

	l = len(wap_coordinates)
	S = sum(distances_to_wap)
	# compute weight vector for initial guess
	W = [((l - 1) * S) / (S - w) for w in distances_to_wap]
	# get initial guess of point location
	x0 = sum([W[i] * wap_coordinates[i] for i in range(l)])
	# optimize distance from signal origin to border of spheres
	return minimize(error, x0, args=(wap_coordinates, distances_to_wap), method='Nelder-Mead').x

def multilaterate():
    #Find network
    ssid = ""
    system = platform.system()
    if system == "Windows":
        ssid = get_current_ssid_windows()
    elif system == "Linux":
        ssid = get_current_ssid_linux()
    elif system == "Darwin":
        ssid = get_current_ssid_macos()

    tx_power = get_tx_power_by_ssid(ssid)
    freq = get_frequency_by_ssid(ssid)

    dists = []
    for coord in refrences:
        signal_strength = get_wifi_rssi(ssid)
        d = calculate_distance(signal_strength, tx_power, freq)
        dists.append(d)

    return ips_solve(dists, refrences)






