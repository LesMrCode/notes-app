import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import DashboardContent from "../components/DashboardContent";


useEffect(() => {
  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) navigate("/login");
  };

  checkUser();
}, [navigate]);

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

