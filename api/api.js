const fs =require('fs');

const getDirectoryDetails = (req,res)=>{
    fs.readdir("C:\\Nirmal\\My Learnings\\ninja\\Source_Files",(err,files)=>{
        if(err){
            console.log(err);
        }

        var FileDetails = [];
        files.forEach(file=>{
            FileDetails.push({"fileName": file});
        });

        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({"fileDetails":FileDetails}));
    })
}

const getFileContents = (fileName,res) =>{
    if(fileName){  
        fs.exists(fileName,(exists)=>{  
            if(exists){   
                fs.readFile(fileName,(err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    var fileContent=[],fileChunk={};
                    var slitContent = data.toString().split('\r\n');
                    
                    for(let i=0;i<=slitContent.length;i++){
                        if(slitContent[i]){
                            let splitKeyValue = slitContent[i].split(":");
                            fileChunk[splitKeyValue[0]] = splitKeyValue[1].trim();
                            if(splitKeyValue[0] == "mobile"){
                                fileContent.push(fileChunk);
                                fileChunk={};
                            }
                        }
                    }            

                    res.setHeader('Content-Type','application/json');      
                    res.end(JSON.stringify({"fileContents": fileContent}));
                })
            }
            else{
                res.send('Filename does not exist');
            }
        });
    }
    else{
       res.send('Filename does not exist');
    }
}

module.exports.getDirectoryDetails = getDirectoryDetails;
module.exports.getFileContents = getFileContents;