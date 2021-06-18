import axiosWithAuth from '../helpers/axiosWithAuth';

async function deleteColorService(id) {
    axiosWithAuth().delete(`/api/colors/${id}`)
        .then((resp) => {
            //console.log(resp.data);
        }).catch((err)=>{console.log(err)});
}

async function editColorService(neoColor) {
    axiosWithAuth().put(`/api/colors/${neoColor.id}`, neoColor)
        .then((resp) => {
            //console.log(resp.data);
        }).catch((err)=>{console.log(err)});
}

export {
    deleteColorService,
    editColorService
}