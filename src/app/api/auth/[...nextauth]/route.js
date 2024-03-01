import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'ejemplo123@gmail.com'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '****'
                }
            },
            async authorize(credentials, req) {
                const user = await isAuthorized(credentials, req)
                if (user) {
                    return user;
                }
                return null;
                // const request = await fetch('http://127.0.0.1:3000/api/login/',{
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(credentials)
                // })
                // const resJSON = await request.json()
                // console.log(resJSON)
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST};