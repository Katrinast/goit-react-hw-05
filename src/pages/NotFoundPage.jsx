import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <p><Link to={'/'}>Back to home page</Link></p>
    </div>
  )
}