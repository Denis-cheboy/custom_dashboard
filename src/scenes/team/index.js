import {DataGrid} from "@mui/x-data-grid"
import {useState,useEffect} from "react"



const Team=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        const fetchUsers = async()=>{
            try{

                const res=await fetch("https://jsonplaceholder.typicode.com/users")
                const users= await res.json()
                setUsers(users)
                
            }
            catch(err){
                console.log(err.message)
            }
        } 
        fetchUsers()

    },[])
    
    const rowData=users?.map((user)=>{
        return{
            id:user.id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            username:user.username,
            company:user.company,
            website:user.website,

        }
    })
    const cols=[
        {field:"id",headerName:"ID",width:50},
        {field:"name",HeaderName:"Name",width:200},
        {field:"email",HeaderName:"Email",width:200},
        { field:"phone",HeaderName:"Phone",width:200},
        { field:"username",HeaderName:"Username",width:150},
        { field:"website",HeaderName:"Website",width:200},
    ]
    
    return(
        <div style={{height:"75vh"}}>
            <DataGrid
            rows={rowData}
            columns={cols}
            checkboxSelection
            // autoHeight
            loading={!users?true:false}
            />

        </div>

    )
}

export default Team