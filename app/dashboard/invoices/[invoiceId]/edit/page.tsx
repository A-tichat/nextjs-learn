import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";

export default async function Page({ params }: { params: { invoiceId: string } }) {
  const { invoiceId } = params;
  const [invoice, customers] = await Promise.all([fetchInvoiceById(invoiceId), fetchCustomers()]);

  if (!invoice) return <div>Invoice no longer exits.</div>;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${invoiceId}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
