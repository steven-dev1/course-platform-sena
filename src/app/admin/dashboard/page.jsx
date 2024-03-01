import Link from 'next/link'

export default function dashboardAdmin() {
    return (
        <div>
            <h1>Dashboard Admin Page</h1>
            <Link href="/admin/logout">Log out</Link>
        </div>
    )
}