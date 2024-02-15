const fs = require('fs');

const saveToDB = (DB) => {
    try{
        fs.writeFileSync("src/database/db.json",JSON.stringify(DB,null,2),{encoding: 'utf-8'})
    }catch (err){
        console.log('Error saving DB', err)
    }
}

module.exports = {
    saveToDB
}