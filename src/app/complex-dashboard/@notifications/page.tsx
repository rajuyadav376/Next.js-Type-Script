import { Card } from "@/components/Card"
import Link from "next/link"
export default function NotificationsPage() {
  return (
    <Card>
    <div>Notification</div>
    <div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </div>
    </Card>
  )
}