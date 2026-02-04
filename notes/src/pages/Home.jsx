import { useEffect } from "react"
import { Navigate, useNavigate} from "react-router-dom"


const useNavigate = () => ({
  push: (path) => { window.location.href = path },
})
const useAuth = () => ({
  user: null,
  isLoading: false,
})

export default function Home() {
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        Navigate("/dashboard")
      } else {
        navigate("/login")
      }
    }
  }, [user, isLoading, navigate])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
