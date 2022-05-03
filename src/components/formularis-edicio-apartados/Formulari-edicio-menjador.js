import { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

function FormulariEdicioMenjador() {
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
                        <div className="card-header bg-warning"><h2 className="card-title">Menjador</h2></div>
                        <div className="card-body">
                            <form onSubmit={log} >
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
                                    <label htmlFor="fileupload" className="form-label">Agregar Video portada menjador</label>
                                    <input type="file" className="form-control" id="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Modificar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FormulariEdicioMenjador;