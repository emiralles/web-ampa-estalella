import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryImages from "../components/gallery/GalleryImages";
import { getOneDocOfTipo, getUrlImage } from "../db/crudDB";

function ViewGalleryImages() {
  
    let { id } = useParams();
    const [listUrlsImages,setListUrlsImages] = useState([]);

    useEffect(()=>{

        const handleLoad = async () =>{
        
            let promesa1 = getOneDocOfTipo('noticie',id);
            promesa1.then((result)=>{
                let data = result.data();
                // data.id = result.id;
              
                data.pathsImages.forEach((textPath)=>{
                    let imgUrl = getUrlImage(textPath);
                    imgUrl.then((rstUrl)=>{
                        let item = rstUrl; 
                        setListUrlsImages(arr => [...arr, item]);
                    });
                })  
            })
            
        }
        
        handleLoad();
    },[id])

    if (!listUrlsImages.length) return <h3>Aún no se han cargado imagenes para esta noticia</h3>;    
    return (
        <>
            <h1>Galeria d'imatges</h1>
            <GalleryImages arrayImages={listUrlsImages}/>
        </>
    )
}

export default ViewGalleryImages