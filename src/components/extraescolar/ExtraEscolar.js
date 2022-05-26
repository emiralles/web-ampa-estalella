
function ExtraEscolar({handleChange, handleCheckChange, handleFileChange, handleSubmit, inputAux}) {
  return (
    <>
        <div className="text-center">
                <main>
                    <form onSubmit={handleSubmit}>
                        <input className="d-none" id="input-aux" ></input>
                        <div className="form-floating mb-3">
                        <input type="number" className="form-control w-50" maxLength={2} id="plazas" onChange={handleChange} placeholder="Numero de plazas" name="plazas"/>
                        <label htmlFor="floatingInput" className="w-50">Numero de plazas, Valor numerico maximo 2 digitos</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" maxLength={32} id="titulo" onChange={handleChange} placeholder="titol" name="titol"/>
                        <label htmlFor="floatingInput">Titol, maxim 32 caracteres</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" maxLength={140} id="parrafo" onChange={handleChange} placeholder="parraf, maxim 140 caracteres" name="parraf"/>
                        <label htmlFor="floatingInput">Parraf, maxim 140 caracteres</label>
                        </div>
                        <div className="form-floating mb-3">
                            
                            <div className="">
                                <input className="d-none" id="textPhoto"/>
                                <label htmlFor="floatingInput">Imatge Logo</label>
                                <input type="file" name="imagenLogo" className="form-control mb-3" id="imagLogo" onChange={handleFileChange} placeholder="imatge logo"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-md">
                                     <div className="form-floating mb-3">
                                        <input type="date" name="dataInici" className="form-control" id="fechaInici" onChange={handleChange}/>
                                        <label htmlFor="fechaInici">Data Inici</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="date" name="dataFinal" className="form-control" id="fechaFinal" onChange={handleChange}/>
                                        <label htmlFor="fechaFinal">Data Final</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="preu" name="preu" onChange={handleChange}/>
                                        <label htmlFor="preu">Preu</label>
                                    </div>
                                    {/* <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="preutarda" name="preutarda" onChange={handleChange}/>
                                        <label htmlFor="preutarda">Preu Tarda</label>
                                    </div> */}
                                </div>
                                <div className="col-md">
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECTP3" type="checkbox" id="P3" value="P3" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="P3">P3</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECTP4" type="checkbox" id="P4" value="P4" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="P4">P4</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECTP5" type="checkbox" id="P5" value="P5" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="P5">P5</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT1E" type="checkbox" id="1E" value="1E" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="1E">1E</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT2D" type="checkbox" id="2D" value="2D" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="2D">2D</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT3E" type="checkbox" id="3E" value="3E" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="3E">3E</label>
                                    </div>
                                    
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT4T" type="checkbox" id="4T" value="4T" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="4T">4T</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT5T" type="checkbox" id="5T" value="5T" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="5T">5T</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="SELECT6T" type="checkbox" id="6T" value="6T" onChange={handleCheckChange}/>
                                        <label className="form-check-label" htmlFor="6T">6T</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="esmati">
                                        <input className="form-check-input" type="radio" name="aquinahora" onChange={handleCheckChange} id="esmati" value={"Mati"}/>Es Mati</label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="estarda">
                                        <input className="form-check-input" type="radio" name="aquinahora" onChange={handleCheckChange} id="estarda" value={"Tarda"}/>Es Tarda</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="1diasetmanal">
                                        <input className="form-check-input" type="radio" name="diasetmanal" onChange={handleCheckChange} id="1diasetmanal" value={"1 dia setmanal"}/>1 dia setmanal</label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="2diasetmanal">
                                        <input className="form-check-input" type="radio" name="diasetmanal" onChange={handleCheckChange} id="2diasetmanal" value={"2 dia setmanal"}/>2 dia setmanal</label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="3diasetmanal">
                                        <input className="form-check-input" type="radio" name="diasetmanal" onChange={handleCheckChange} id="3diasetmanal" value={"3 dia setmanal"}/>3 dia setmanal</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-floating">
                                <textarea className="form-control" name="principalText" placeholder="Leave a comment here" onChange={handleChange} id="principalText" style={{height:"100px"}}></textarea>
                                <label htmlFor="principalText">Text Principal</label>
                            </div>
                        </div>
                        
                        <button id="btn-extraescolar" className="w-100 btn btn-lg btn-primary" type="submit">Agregar</button>
                    </form>
                </main>
            </div>
    </>
  )
}

export default ExtraEscolar