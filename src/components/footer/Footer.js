import Icons from "bootstrap-icons/bootstrap-icons.svg";

function FooterComponent() {
    return ( 
        <>
            <div className="col-md-4 d-flex align-items-center">
            {/* <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            </a> */}
                <span class="text-muted">© 2022 AriMath, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use xlinkHref={`${Icons}#twitter`}></use></svg></a></li>
                <li className="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use xlinkHref={`${Icons}#instagram`}></use></svg></a></li>
                <li className="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use xlinkHref={`${Icons}#facebook`}></use></svg></a></li>
            </ul>
        </>
    );
}
    <>
    </>
export default FooterComponent;
