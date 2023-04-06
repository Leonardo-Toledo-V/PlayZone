import AdminNav from '@/components/header/AdminNav';
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <AdminNav/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 font-bold">
                            Aquí agregaré el crud para los videojuegos
                        </div>
                    </div>
                </div>
            </div>
        </>
               
    )
}

export default Dashboard;
