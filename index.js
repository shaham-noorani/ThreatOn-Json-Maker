var author
var simName
var link
var dateCreated = new Date()
var mitre = ["", "", "", ""]
var shortDesc
var longDesc
var linux
var windows
var darwin
var type
var command
var payload
var fs = require('fs')
var jsonfile = require('jsonfile')
var uuidv4 = require('uuid/v4')
var uuid = uuidv4()

function bang()
{
    simName = document.getElementById("simNameForm").elements[0].value
    author = document.getElementById("authorForm").elements[0].value
    link = document.getElementById("linkForm").elements[0].value
    shortDesc = document.getElementById("shortForm").elements[0].value
    longDesc = document.getElementById("longForm").elements[0].value
    linux = document.getElementById("linuxForm").elements[0].value
    darwin = document.getElementById("darwinForm").elements[0].value
    windows = document.getElementById("windowsForm").elements[0].value
    type = document.getElementById("typeForm").elements[0].value
    command = document.getElementById("cmdsForm").elements[0].value
    payload = document.getElementById("payloadForm").elements[0].value
    mitre[0] = document.getElementById("mitre1Form").elements[0].value
    mitre[1] = document.getElementById("mitre2Form").elements[0].value
    mitre[2] = document.getElementById("mitre3Form").elements[0].value
    mitre[3] = document.getElementById("mitre4Form").elements[0].value
    dateCreated = dateCreated.toDateString()
}
function makeJson()
{
    var file = '/Users/shahamnoorani/Desktop/sim.json'
    var obj = 
    {
            "active": true,
            "author": author,
            "name": simName,
            "link": link,
            "created": dateCreated,
            "active": true,
            "mitre": {
                "link": mitre[0],
                "tactic": mitre[1],
                "technique_id": mitre[2],
                "technique": mitre[3]
            },
            "short_description": shortDesc,
            "long_description": longDesc,
            "type": type,
            "commands": [{command}],
            "undo_commands": [],
            "creates_file": null,
            "writes_to_registry": null,
            "payload": payload,
            "linux": linux,
            "darwin": darwin,
            "windows": windows,
            "uuid": uuid
    }
    var path = uuid + ".json"
    fs.writeFile(path, "", (err) => {
        if (err) throw err;
    }); 
    jsonfile.writeFile(path, obj, {spaces: 2, EOL: '\r\n'}, function (err) {
    })
}