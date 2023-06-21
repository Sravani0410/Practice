import classes from "./Model.module.css";
import  ReactDOM  from "react-dom";
const Overlay = ()=>{
    return <div className={classes.overlay} />
}
const ModelContent = (props)=>{
    return <div className={classes.model}>
        {props.children}
    </div>
}

const Model = (props)=>{
    return <>
        {
            ReactDOM.createPortal(<Overlay />,document.getElementById("root_overlay"))
        }
        {
            ReactDOM.createPortal(<ModelContent>{props.children}</ModelContent>,document.getElementById("root_model"))
        }
    </>
}

export {Model};