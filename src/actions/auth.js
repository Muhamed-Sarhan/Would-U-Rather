export const set_AuthUser ="setAuthUser"
export const delete_AuthUser ="deleteAuthUser"

export function setAuthUser(id){
    return {
        type:set_AuthUser,
        id
    }
}  
export function deleteAuthUser(){
    return{
        type:delete_AuthUser,
    }
}