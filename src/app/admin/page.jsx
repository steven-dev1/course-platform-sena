import Link from 'next/link'

export default function adminPage() {
    return (
        <div>
            <h1>Admin Page</h1>
            <Link href="/admin/dashboard">Dashboard</Link>
        </div>
    )
}