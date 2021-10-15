export const checkFileExtension = (ext: any) => {
    let icon: any;
    switch(ext.toLowerCase()) {
        case "jpg":
            icon = <i className="fas fa-mountain"></i>
        break;
        case "png":
            icon = <i className="fas fa-mountain"></i>
        break;
        case "pdf":
            icon = <i className="fas fa-file-pdf"></i>
        break;
        case "zip":
            icon = <i className="fas fa-file-archive"></i>
        break;
        case "xls":
            icon = <i className="fas fa-file-spreadsheet"></i>
        break;
        case "csv":
            icon = <i className="fas fa-file-spreadsheet"></i>
        break;
    }
    return icon;
}