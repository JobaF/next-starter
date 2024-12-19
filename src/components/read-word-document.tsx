"use client";

import { useState } from "react";

import { Card, CardBody } from "@nextui-org/react";
import mammoth from "mammoth";

export default function ReadWordDocument() {
  const [documentText, setDocumentText] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files === null) return;

    const file = event.target.files[0];
    if (!file) return;

    try {
      // Convert the file to an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Convert to HTML using mammoth
      const result = await mammoth.convertToHtml({ arrayBuffer });

      // Set the extracted text
      setDocumentText(result.value);

      // Log any warnings
      if (result.messages.length > 0) {
        console.warn("Warnings:", result.messages);
      }
    } catch (err: unknown) {
      setError(
        "Error reading document: " +
          (err instanceof Error ? err.message : String(err))
      );
      console.error("Error:", err);
    }
  };
  return (
    <Card className="mx-auto mt-4 max-w-4xl p-2">
      <CardBody className="flex flex-col gap-4">
        <h1 className="text-3xl">Datei hochladen</h1>

        <div className="flex flex-row gap-2">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".docx"
            className=""
          />
        </div>
        {error && (
          <div className="mb-4 rounded-md p-4 text-red-700">{error}</div>
        )}

        {documentText && (
          <div className="rounded-md border p-4">
            <pre className="whitespace-pre-wrap">{documentText}</pre>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
