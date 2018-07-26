# ThreatOn-Json-Maker
Create ThreatON simulations in the accepted .json format with ease. Files are saved to the repository folder.
This is a node js application that uses electron to intialize, therefore both must be downloaded for runnability.  
To run via the terminal:  
`cd Documents/GitHub/ThreatOn-Json-Maker`  
`npm install`  
`npm start`
## More on the format
The files are named using a UUID (Universal Unique Identifier). These numbers identify and distinguish internet entities and objects. As such, it is extremely unlikely for there to be duplicate UUIDS, ensuring that the files are easily identified.

UUIDs can be found/generated here: https://www.uuidgenerator.net/version4

# Example of Correctly Formatted Simulation
\{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"active": true,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"author": "Shaham Noorani",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"name": "Remote System Discovery - Ping",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"link": "https://github.com/bhende1om/Windows-Ping-Test",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"created": "Tue Nov 14 2017 18:00:00 GMT-0600 (Central Standard Time)",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"mitre": {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"link": "https://attack.mitre.org/wiki/Technique/T1018",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"tactic": "Command-Line Interface",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"technique_id": "T1018",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"technique": "Remove System Discovery"  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\},  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"short_description": "Ping is an operating system utility commonly used to troubleshoot and verify network connections.",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"long_description": "Adversaries will likely attempt to get a listing of other systems &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by IP address, hostname, or other logical identifier on a network that may be used for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lateral Movement from the current system. Functionality could exist within remote access &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tools to enable this, but utilities available on the operating system could also be &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;used.",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"type": "cli",  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"commands": [{  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"command": "ping https://github.com/ShahamNoorani/ThreatOn-Json-Maker/ | lolcat"   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\},   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"undo_commands": [],   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"creates_file": null,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"writes_to_registry": null,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"payload": null,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"linux": true,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"darwin": true,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"windows": false,  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"uuid": "4697bbba-84b3-4a6a-9f5c-071bb7d09a15"  
\}  
