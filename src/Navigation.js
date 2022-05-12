
function Navigation( props ){
    return(
        <form>
            <input type="text" onChange={(event)=>props.onSearchBarChange(event)} />
        </form>
    );
}

export default Navigation;