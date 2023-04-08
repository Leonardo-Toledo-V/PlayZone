import Pagination from '@/components/dashboard/Pagination';
import Table from '@/components/dashboard/Tables';
import AdminNav from '@/components/header/AdminNav'
import Head from 'next/head'

const Dashboard = () => {


    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <AdminNav/>
            <Table/>
            <Pagination/>
        </>
    )
}

export default Dashboard
