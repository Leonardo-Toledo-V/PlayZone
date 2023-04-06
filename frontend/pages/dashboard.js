import Table from '@/components/dashboard/Table';
import AdminNav from '@/components/header/AdminNav'
import Head from 'next/head'

const Dashboard = () => {

    const handleUpdate =(e)=>{
        e.preventDefault();
        alert("Hola a todos este es update")
    }
    const handleDelete =(e)=>{
        e.preventDefault();
        alert("Hola a todos este es delete")
    }
    const handleAdd =(e)=>{
        e.preventDefault();
        alert("Hola a todos este es add")
    }


    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <AdminNav />
            <Table/>
        </>
    )
}

export default Dashboard
