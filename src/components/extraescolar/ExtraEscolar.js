
function ExtraEscolar() {
  return (
    <>
        <div className="text-center">
                <main>
                    <form>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" maxLength={32} id="floatingInput" placeholder="titol" name="titol"/>
                        <label htmlFor="floatingInput">Titol, maxim 32 caracteres</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" maxLength={140} id="floatingInput" placeholder="parraf, maxim 140 caracteres" name="parraf"/>
                        <label htmlFor="floatingInput">Parraf, maxim 140 caracteres</label>
                        </div>
                        <div className="form-floating mb-3">
                            
                            <div className="">
                                <label htmlFor="floatingInput">Imatge Logo</label>
                                <input type="file" className="form-control mb-3" id="floatingInput" placeholder="imatge logo" name="imatgeLogo"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                {/* <div className="col-md">
                                    <label htmlFor="floatingInput">Imatge Logo</label>
                                    <div className="form-floating">
                                        <input type="file" className="form-control mb-3" id="floatingInput" placeholder="imatge logo" name="imatgeLogo"/>
                                    </div>
                                </div> */}
                                <div className="col-md">
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <div className="form-floating">
                                                <input type="date" className="form-control" id="fechaInici"/>
                                                <label htmlFor="fechaInici">Data Inici</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <div className="form-floating">
                                                <input type="date" className="form-control" id="fechaFinal"/>
                                                <label htmlFor="fechaFinal">Data Final</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="preumati" name="preumati"/>
                                                <label htmlFor="preumati">Preu Mati</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="preutarda" name="preutarda"/>
                                                <label htmlFor="preutarda">Preu Tarda</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <label>
                                                <input type="checkbox" id="1dia" value="1vagades"/> 1 dia setmanal
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <label>
                                                <input type="checkbox" id="2dia" value="2vagades"/> 2 dia setmanal
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <label>
                                                <input type="checkbox" id="3dia" value="3vagades"/> 3 dia setmanal
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <label>
                                                <input type="checkbox" id="esmati" value="isForTomorrow"/> Es de Matì
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className=" col-lg">
                                            <label>
                                                <input type="checkbox" id="estarda" value="isForAfternoon"/> Es de tarda
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="principalText" style={{height:"100px"}}></textarea>
                                <label htmlFor="principalText">Text Principal</label>
                            </div>
                            {/* <div className="form-floating">
                                <label htmlFor="principalText" className="form-label">Text Principal</label>
                                <textarea className="form-control" id="principalText" style={{height:"100px"}} name="textArea"></textarea>
                            </div> */}
                        </div>
                        
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Agregar</button>
                    </form>
                </main>
            </div>
    </>
  )
}

export default ExtraEscolar