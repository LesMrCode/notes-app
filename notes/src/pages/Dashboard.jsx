import { useEffect } from "react"
import { useNavigate} from "react-router-dom" 
import DashboardContent from "../components/DashboardContent"


const useAuth = () => ({
  user: { id: "user-1", email: "" },
  isLoading: false,
})

export default function DashboardPage() {
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login")
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Loading your notes...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <DashboardContent />
}
