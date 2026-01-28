import { useEffect } from "react"
import { useNavigate} from "react-router-dom"


const useNavigate = () => ({
  push: (path) => { window.location.href = path },
})
const useAuth = () => ({
  user: null,
  isLoading: false,
})

export default function Home() {
  const router = useNavigate()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push("/dashboard")
      } else {
        router.push("/login")
      }
    }
  }, [user, isLoading, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
