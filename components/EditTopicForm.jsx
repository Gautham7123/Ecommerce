"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/api/topic/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Title"
        style={{
          fontSize: "16px",
          borderRadius: "8px",
          transition: "border-color 0.3s, box-shadow 0.3s",
          outline: "none",
          padding: "12px",
        }}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 6px rgba(0, 150, 136, 0.6)")}
        onBlur={(e) => (e.target.style.boxShadow = "none")}
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Description"
        style={{
          fontSize: "16px",
          borderRadius: "8px",
          transition: "border-color 0.3s, box-shadow 0.3s",
          outline: "none",
          padding: "12px",
        }}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 6px rgba(0, 150, 136, 0.6)")}
        onBlur={(e) => (e.target.style.boxShadow = "none")}
      />

      <button
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        style={{
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#2e7d32";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#4caf50";
          e.target.style.transform = "scale(1)";
        }}
      >
        Update Topic
      </button>
    </form>
  );
}
