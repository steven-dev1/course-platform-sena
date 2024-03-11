// import Image from 'next/image';
// import ContinueCards from '@/components/cards/ContinueCards';
// import SignUpCards from '@/components/cards/SignUpCards';
// import DarkButtons from '@/components/DarkButtons';
'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function Dashboard() {
    const router = useRouter()
	const [user, setUser] = useState({
		id: '',
        email: ''
	})
	const getProfile = async () => {
		const profile = await axios.get("/api/profile");
		setUser(profile.data)
		console.log(profile)
	}

	const logout = async () => {
		try {
			const response = await axios.get("/api/auth/logout");
			if (response.status === 200) {
                router.push("/auth/login");
            }
		} catch (err) {
			console.log(err)
			// router.push('/')
		}
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<pre>
				{JSON.stringify(user, null, 2)}
			</pre>
			<div className="flex flex-col gap-2">
				<button onClick={() => getProfile()} className="bg-blue-700 inline-block p-3 rounded-lg text-white">
					get profile
				</button>
				<button onClick={() => logout()} className="bg-red-500 inline-block p-3 rounded-lg text-white">
					log out
				</button>
			</div>
		</div>
	);
}