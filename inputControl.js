function readFile() {
    let files = document.getElementById('inputFile').files
    let reader = new FileReader()
    reader.onload = () => {
        let arrayData = []
        //Read file
        const file = reader.result
        // Separate line by line
        const allLines = file.split(/\r\n|\n/)
        allLines.forEach((line) => {
            if (line) arrayData.push(line)
        })
        convertAsObject(arrayData)
    }

    reader.onerror = (event) => {
        alert(event.target.error.name)
    }

    reader.readAsText(files[0])
}

function convertAsObject(arrayData) {
    //convert to array of objects
    let objectsArray = arrayData.map(line => {
        let separateData = line.split('=')
        return {
            'name': separateData[0],
            'inputs': separateData[1].split(','),
        }
    })
    compareData(objectsArray)
}

function compareData(arrayData) {
    for (let index = 0; index < (arrayData.length - 1); index++) {
        let currentPerson = arrayData[index]
        let persons = arrayData.slice(index + 1, arrayData.length)
        persons.forEach(filterPerson => {
            let count = countAppearances(currentPerson.inputs, filterPerson.inputs)
            document.getElementById('output').textContent += currentPerson.name + '-' + filterPerson.name + ': ' + count + "\n";
        })
    }
}

function countAppearances(currentInputs, otherPersonInputs) {
    let count = 0
    currentInputs.forEach(input => {
        let day = input.substring(0, 2)
        otherPersonInputs.forEach(otherPersonInput => {
            //same day
            if (day === otherPersonInput.substring(0, 2)) {
                let currentHour = input.substring(2).split('-')
                let otherPersonHour = otherPersonInput.substring(2).split('-')
                //same hour
                if (currentHour[0] === otherPersonHour[0])
                    count++
                else {
                    let currentHourEntry = currentHour[0].split(':')[0]
                    let currentHourOut = currentHour[1].split(':')[0]
                    let otherPersonHourEntry = otherPersonHour[0].split(':')[0]
                    let otherPersonHourOut = otherPersonHour[1].split(':')[0]

                    if (parseInt(currentHourEntry) >= parseInt(otherPersonHourEntry) && parseInt(currentHourEntry) <= parseInt(otherPersonHourOut))
                        count++
                    else if(parseInt(otherPersonHourEntry) >= parseInt(currentHourEntry) && parseInt(otherPersonHourEntry) <= parseInt(currentHourOut))
                        count++
                }
            }
        })
    })

    return count
}