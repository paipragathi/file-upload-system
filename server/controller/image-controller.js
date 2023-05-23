import File from "../models/file.js";



export const uploadImage= async (request, response)=>{
    // console.log(request);
    //  console.log(request.route.path);
     const fileObj = {
        path: request.file.path,
        name: request.file.originalname
     } 
     
    try {

        const file = await File.create(fileObj);
        console.log(file);
        response.status(200).json({path: `localhost:8000/file/${file._id}`})

    } catch(error) {
        console.log(error.message);
        response.status(500).json({error: error.message});
    }
}


export const downloadImage = async (request,response)=> {
    try{
        const file=await File.findById(request.params.fileId);
        file.downloadContent++;
await file.save();


response.download(file.path,file.name);
    }
    catch(error){

        console.log(error.message);
        response.status(500).json({error: error.message});
    }

    
}