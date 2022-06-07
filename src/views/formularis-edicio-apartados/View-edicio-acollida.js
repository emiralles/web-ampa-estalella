import { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

function ViewEdicioAcollida() {
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
                        <div className="card-header bg-warning"><h2 className="card-title">Acollida</h2></div>
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
                                <div className="row mb-3">
                                    <div className="row">
                                       <h2>Preu Socis AFA</h2> 
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Fixo Mensual 1 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Fixo Mensual 1/2 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Eventuals Mensual 1 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Eventuals Mensual 1/2 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <div className="row">
                                       <h2>Preu No Socis AFA</h2> 
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Fixo Mensual 1 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Fixo Mensual 1/2 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Eventuals Mensual 1 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                        <div className=" col-md-6 d-flex flex-md-row">
                                            <div className=" col-md-10">
                                                <label htmlFor="preusocisfixomensual" className="form-label">Eventuals Mensual 1/2 h</label>
                                            </div>
                                            <div className=" col-md-2">
                                                <input type="texto" className="form-control" id="preusocisfixomensual"/>
                                            </div>
                                        </div>
                                    </div>
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

export default ViewEdicioAcollida;