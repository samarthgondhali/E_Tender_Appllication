import { useNavigate } from "react-router-dom";


export default function LogOut(){
    const navigate = useNavigate();
    localStorage.removeItem("UserSession")
    navigate("/")
} 