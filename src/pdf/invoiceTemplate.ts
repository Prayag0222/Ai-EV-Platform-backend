import { invoiceStyles } from "../templates/invoice/invoiceStyle.js";
import type { InvoiceTemplateData } from "../templates/invoice/invoiceTypes.js";
const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);

export function generateInvoiceHTML(data: InvoiceTemplateData): string {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const rows = data.items
    .map(
      (item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.sku}</td>
        <td class="center">${item.qty}</td>
        <td class="right">${money(item.price)}</td>
        <td class="right">${money(item.qty * item.price)}</td>
      </tr>
    `
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8" />

<title>${data.invoiceNo}</title>

<style>

${invoiceStyles}

</style>

</head>

<body>

<div class="invoice">

    <div class="header">

        <div class="company">

            ${
              data.logo
                ? `<img src="${data.logo}" style="height:70px;margin-bottom:14px;" />`
                : ""
            }

            <h1>${data.shopName}</h1>

            ${
              data.shopAddress
                ? `<p>${data.shopAddress}</p>`
                : ""
            }

            ${
              data.shopPhone
                ? `<p>Phone : ${data.shopPhone}</p>`
                : ""
            }

            ${
              data.shopEmail
                ? `<p>Email : ${data.shopEmail}</p>`
                : ""
            }

            ${
              data.gstNumber
                ? `<p>GST : ${data.gstNumber}</p>`
                : ""
            }

        </div>

        <div class="invoice-info">

            <h2>${data.gstNumber ? "TAX INVOICE" : "INVOICE"}</h2>

            <p><strong>No :</strong> ${data.invoiceNo}</p>

            <p><strong>Date :</strong> ${data.invoiceDate}</p>

        </div>

    </div>

    <div class="section">

        <div class="card">

            <div class="label">
                Bill To
            </div>

            <div class="value">

                <strong>${data.customerName}</strong><br>

                ${data.customerPhone}

                ${
                  data.customerAddress
                    ? `<br>${data.customerAddress}`
                    : ""
                }

            </div>

        </div>

        <div class="card">

            <div class="label">
                Vehicle
            </div>

            <div class="value">

                ${data.vehicle || "-"}

                <br>

                ${data.ticketReference || "-"}

            </div>

        </div>

    </div>

    <table>

        <thead>

            <tr>

                <th>#</th>

                <th>Description</th>

                <th>SKU</th>

                <th class="center">Qty</th>

                <th class="right">Rate</th>

                <th class="right">Amount</th>

            </tr>

        </thead>

        <tbody>

            ${rows}

        </tbody>

    </table>

    <div class="summary">

        <table>

            <tr>

                <td>Parts Subtotal</td>

                <td class="right">${money(subtotal)}</td>

            </tr>

            <tr>

                <td>Labour</td>

                <td class="right">${money(data.labour)}</td>

            </tr>

            <tr>

                <td>Tax</td>

                <td class="right">${money(data.tax)}</td>

            </tr>

            <tr>

                <td>Discount</td>

                <td class="right">- ${money(data.discount)}</td>

            </tr>

            <tr>

                <td class="total">Grand Total</td>

                <td class="right total">${money(data.grandTotal)}</td>

            </tr>

        </table>

    </div>

    ${
      data.notes
        ? `
        <div class="notes">

            <strong>Notes</strong>

            <p style="margin-top:10px;">
                ${data.notes}
            </p>

        </div>
    `
        : ""
    }

    <div class="footer">

        <div class="thankyou">

            Thank you for choosing ${data.shopName}

        </div>

        <div class="signature">

            <div class="signature-line"></div>

            <div class="signature-text">

                Authorized Signature

            </div>

        </div>

    </div>

</div>

</body>

</html>
`;
}