import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function RouteTransition() {
  const location = useLocation()

  return <div key={location.pathname} className="route-transition"><Outlet /></div>
}
