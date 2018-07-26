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
  * \"active": true,  
  \"author": "Shaham Noorani",  
  \"name": "Remote System Discovery - Ping",  
  \"link": "https://github.com/bhende1om/Windows-Ping-Test",  
  \"created": "Tue Nov 14 2017 18:00:00 GMT-0600 (Central Standard Time)",  
  \"mitre": {  
    \"link": "https://attack.mitre.org/wiki/Technique/T1018",  
    \"tactic": "Command-Line Interface",  
    \"technique_id": "T1018",  
    \"technique": "Remove System Discovery"  
  \},  
  \"short_description": "Ping is an operating system utility commonly used to troubleshoot and verify network connections.",  
  \"long_description": "Adversaries will likely attempt to get a listing of other systems by IP address, hostname, or other   logical identifier on a network that may be used for Lateral Movement from the current system. Functionality could exist   within remote access tools to enable this, but utilities available on the operating system could also be used.",  
  \"type": "cli",  
  \"commands": [{  
    \"command": "ping https://github.com/ShahamNoorani/ThreatOn-Json-Maker/edit/master/README.md | lolcat"   
  \},   
  \"undo_commands": [],   
  \"creates_file": null,  
  \"writes_to_registry": null,  
  \"payload": null,  
  \"linux": true,  
  \"darwin": true,  
  \"windows": false,  
  \"uuid": "4697bbba-84b3-4a6a-9f5c-071bb7d09a15"  
\}  
