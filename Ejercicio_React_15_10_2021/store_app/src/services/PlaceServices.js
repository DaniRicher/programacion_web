import http from './http-config';

const getAll = () =>{
    return http.get("/places/");
}
const get = (id)=>{
    return http.get(`/places/${id}`,id);
}
const create = (placeData)=>{
    return http.post("/places",placeData)
}
const update =(id,placeData)=>{
    return http.put(`/places/${id}`,placeData)
}
const remove = id =>{
    return http.delete(`/places/${id}`);
}

const exportedObjects = {
    getAll,
    get,
    create,
    update,
    remove
}
export default exportedObjects;