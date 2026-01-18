"use client"

import { useEffect } from "react"
import DashboardContent from "../components/DashboardContent"

const useRouter = () => ({
  push: (path) => { window.location.href = path },
})
const useAuth = () => ({
  user: { id: "user-1", email: "user@example.com" },
  isLoading: false,
})

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

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
