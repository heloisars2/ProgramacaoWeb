function insertString(str, toInsert, indexes){
        const charArray = str.split("");
        let insertCount = 0;

        for(let i = 0; i <= str.length; i++){
            //console.log(str[i]);
            if(indexes.includes(i)){
                charArray.splice(i + insertCount, 0, toInsert);
                insertCount++
            }
        }
        return charArray.join("");
    }
//console.log(insertString())

