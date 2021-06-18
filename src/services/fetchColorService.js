import axiosWithAuth from '../helpers/axiosWithAuth';

async function fetchColorService(setFunction) {
    axiosWithAuth().get("/api/colors")
        .then((resp) => {
            setFunction(resp.data);
        }).catch((err)=>{console.log(err)});
}
export default fetchColorService;