import React from 'react'
import MainAdminLayout from '../../layouts/administration/main';
import DashboardAnalytics from '../../components/adminstration/analytics/dashboardAnalytics';
import LatestOrders from '../../components/adminstration/orders/latestOrder';
function AdminIndexView(){
    return (
        <>
        <MainAdminLayout>
            <DashboardAnalytics />
            <LatestOrders />
        </MainAdminLayout>
        </>
    )
}

export default AdminIndexView;