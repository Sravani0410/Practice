const express = require('express');
const app = express();

// Import necessary modules and define invoice data
const fs = require('fs');
const pdfMake = require('pdfmake');

const fs = require("fs");
const pdfMake = require("pdfmake");

// Define the label and invoice data
const labelData = {
  recipient: "John Doe",
  address: "123 Main Street, City, State, ZIP",
};

const invoiceData = {
  invoiceNumber: "INV-001",
  date: "June 28, 2023",
  recipient: "John Doe",
  address: "123 Main Street, City, State, ZIP",
  items: [
    { description: "Item 1", quantity: 2, price: 10 },
    { description: "Item 2", quantity: 1, price: 15 },
    { description: "Item 3", quantity: 3, price: 8 },
  ],
};

// Function to generate the label
function generateLabel(labelData) {
  const docDefinition = {
    content: [
      {
        text: "Shipping Label",
        fontSize: 20,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      { text: labelData.recipient, fontSize: 14 },
      { text: labelData.address, fontSize: 14 },
    ],
  };

  const printer = new pdfMake();
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream("label.pdf"));
  pdfDoc.end();
  console.log("Label generated successfully.");
}

// Function to generate the invoice
function generateInvoice(invoiceData) {
  const tableRows = invoiceData.items.map((item) => [
    item.description,
    item.quantity,
    item.price,
    item.quantity * item.price,
  ]);

  const docDefinition = {
    content: [
      { text: "Invoice", fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
      {
        text: `Invoice Number: ${invoiceData.invoiceNumber}`,
        fontSize: 14,
        margin: [0, 0, 0, 5],
      },
      {
        text: `Date: ${invoiceData.date}`,
        fontSize: 14,
        margin: [0, 0, 0, 10],
      },
      { text: invoiceData.recipient, fontSize: 14 },
      { text: invoiceData.address, fontSize: 14, margin: [0, 0, 0, 10] },
      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          body: [["Description", "Quantity", "Price", "Total"], ...tableRows],
        },
        margin: [0, 0, 0, 10],
      },
    ],
  };

  const printer = new pdfMake();
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream("invoice.pdf"));
  pdfDoc.end();
  console.log("Invoice generated successfully.");
}

// Generate the label and invoice
generateLabel(labelData);
generateInvoice(invoiceData);
