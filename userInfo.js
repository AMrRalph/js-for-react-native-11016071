import {processArray, formatArrayStrings} from './arrayManipulation.js'

function createUserProfiles(arrayOfNames, modifiedNames){
    let profilesInfo = []
    for(var i = 0; i < arrayOfNames.length; i++){
        profilesInfo.push({
            originalName : arrayOfNames[i],
            modifiedName : modifiedNames[i],
            id : i+1
        })
    }
    return profilesInfo
}
