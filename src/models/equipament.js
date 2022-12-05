// export class equipament{
//     constructor(uid,cosHtml,dateCreation,urlPhoto,path,namePhoto){
//         this.uid = uid;
//         this.cosHtml = cosHtml;
//         this.dateCreation = dateCreation;
//         this.urlPhoto = urlPhoto;
//         this.path = path;
//         this.namePhoto = namePhoto;
//     }
// }

export class equipament{
    constructor(Uid,path,title,mainText,namePhoto,urlPhoto){
        this.Uid = Uid;
        this.path = path;
        this.title= title;
        this.mainText= mainText;
        this.namePhoto= namePhoto;
        this.urlPhoto= urlPhoto;
    }
}