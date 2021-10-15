import Status from "../components/Status/Status";

export const getStatus = (status: string) => {
    let icon: any;
    if(status === "uploading") {
        icon = <Status icon={"far fa-spinner-third"} name={"Encrypting..."} />
    } else if(status === "nextup") {
        icon = <Status icon={"far fa-circle"} name={"Waiting..."} />
    } else if(status === "incomplete") {
        icon = <Status icon={"fas fa-window-close"} name={"Cancelled"} />
    } else {
        icon = <Status icon={"far fa-check-circle"} name={"Done"} />
    } 
    return icon;
}