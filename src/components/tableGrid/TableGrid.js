
function TableGrid({data,nameCheck,handleCheckChange}) {
    if (data !== null && data.length > 0) {
        return(
            <div className=" col-lg-12">
                <div className=" table-responsive border border-success rounded ml-3 mr-3" style={{height:"200px", overflowY:"scroll!important"}} >
                    <table className="table table-hover table-bordered table-striped ">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            {/* <th scope="col"><input type="checkbox" aria-label="Checkbox for following text input"/></th> */}
                            {
                                data[0].map((item,index) => (
                                    <th scope="col" className={index===0 ? 'd-none':''} key={index}>{item}</th>
                                ))
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[1].map((item,index) => (
                                    <tr key={index}>
                                    <th scope="row"><input key={index} name={nameCheck} id={index} onChange={handleCheckChange} type="checkbox" aria-label="Checkbox for following text input"/></th>
                                        {
                                            item.map((itemData,index) => (
                                                <td key={index} className={index===0 ? 'd-none':''}>{itemData}</td>
                                            ))      
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )        
    }else{
        return(
            <div className=" col-lg-12">
                <h3>No existen registros ....</h3>
            </div>
        )
    }
}

export default TableGrid