
function Equipament({handleChange, handleFileChange, handleSubmit, inputAux}) {
    return (
        <>
            <div className="text-center">
                <main>
                    <form onSubmit={handleSubmit}>
                        <input className="d-none" id="input-aux" ></input>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" maxLength={32} id="titulo" onChange={handleChange} placeholder="titol" name="titol"/>
                        <label htmlFor="floatingInput">Titol, maxim 32 caracteres</label>
                        </div>
                        <div className="form-floating mb-3">
                            <div className="">
                                <input className="d-none" id="textPhoto"/>
                                <label htmlFor="floatingInput">Imatge Logo</label>
                                <input type="file" name="imagenLogo" className="form-control mb-3" id="imagLogo" onChange={handleFileChange} placeholder="imatge logo"/>
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
  
export default Equipament
  
  