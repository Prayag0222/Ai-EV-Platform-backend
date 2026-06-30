export const invoiceStyles = `
@page{
    size:A4;
    margin:15mm;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    color:#111827;
    background:#ffffff;
    font-size:13px;
    line-height:1.5;
}

.invoice{
    width:100%;
}

.header{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    border-bottom:2px solid #1e293b;
    padding-bottom:20px;
    margin-bottom:28px;
}

.company img{
    display:block;
    margin-bottom:14px;
}

.company h1{
    font-size:28px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:8px;
}

.company p{
    font-size:13px;
    color:#475569;
    line-height:1.6;
}

.invoice-info{
    text-align:right;
}

.invoice-info h2{
    font-size:30px;
    color:#0f172a;
    margin-bottom:10px;
    letter-spacing:1px;
}

.invoice-info p{
    font-size:13px;
    color:#475569;
    margin-top:4px;
}

.status{
    display:inline-block;
    margin-top:12px;
    padding:6px 14px;
    border-radius:999px;
    font-size:11px;
    font-weight:700;
    text-transform:uppercase;
}

.status.paid{
    background:#dcfce7;
    color:#166534;
}

.status.unpaid{
    background:#fee2e2;
    color:#991b1b;
}

.section{
    display:flex;
    justify-content:space-between;
    gap:40px;
    margin-bottom:28px;
}

.card{
    flex:1;
}

.label{
    font-size:11px;
    color:#64748b;
    text-transform:uppercase;
    font-weight:700;
    letter-spacing:.08em;
    margin-bottom:8px;
}

.value{
    font-size:14px;
    line-height:1.7;
    color:#0f172a;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:18px;
    page-break-inside:auto;
}

thead{
    background:#0f172a;
    color:#ffffff;
}

th{
    padding:12px;
    font-size:12px;
    font-weight:700;
    text-align:left;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
    font-size:13px;
}

tr{
    page-break-inside:avoid;
    page-break-after:auto;
}

.right{
    text-align:right;
}

.center{
    text-align:center;
}

.summary{
    width:340px;
    margin-left:auto;
    margin-top:28px;
}

.summary table{
    margin-top:0;
}

.summary table td{
    border:none;
    padding:8px 0;
}

.total{
    font-size:24px;
    font-weight:800;
    border-top:2px solid #111827;
    padding-top:12px !important;
}

.notes{
    margin-top:40px;
    padding:18px;
    background:#f8fafc;
    border:1px solid #e2e8f0;
    border-radius:8px;
    page-break-inside:avoid;
}

.notes strong{
    display:block;
    margin-bottom:10px;
    color:#0f172a;
}

.notes p{
    color:#475569;
    line-height:1.7;
}

.footer{
    margin-top:60px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    page-break-inside:avoid;
}

.thankyou{
    font-size:12px;
    color:#64748b;
}

.signature{
    width:220px;
    text-align:center;
}

.signature-line{
    margin-top:55px;
    border-top:1px solid #111827;
    margin-bottom:8px;
}

.signature-text{
    font-size:12px;
    color:#475569;
}

img{
    max-width:100%;
}

@media print{

    body{
        -webkit-print-color-adjust:exact;
        print-color-adjust:exact;
    }

    thead{
        display:table-header-group;
    }

    tfoot{
        display:table-footer-group;
    }
}
`;