import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "ClickCart. - Admin",
    description: "ClickCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
