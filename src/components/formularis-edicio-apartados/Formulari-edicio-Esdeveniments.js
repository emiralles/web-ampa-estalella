import { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';


function FormulariEdicioEsdeveniments() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        let data = editorRef.current.getContent();

        console.log(data);
        }
    };

    return (
        <>            
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Esdeveniment</h2></div>
                        <div className="card-body">
                            <form onSubmit={log} >
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" maxLength={32} id="floatingInput" placeholder="titol" name="titol"/>
                                    <label htmlFor="floatingInput">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="mb-3">
                                    <Editor
                                        apiKey="twddabpib9sh6y8sk8heu47ikwtyx74ryopk10mxlnlf2ue8"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>agregue aqui el texto.</p>"
                                        init={{
                                        height: 500,
                                        menubar: true,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fileupload" className="form-label">Agregar Imagen Evento</label>
                                    <input type="file" className="form-control" id="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormulariEdicioEsdeveniments
