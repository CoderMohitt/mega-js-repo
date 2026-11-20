import { useNavigate } from "react-router"

export default function Login() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        navigate("/")
    }

    return <>
        <form action="" onSubmit={handleSubmit}>
            <button>submit</button>
        </form>
    </>
}