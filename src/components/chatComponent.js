"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ChatComponent({ openModal, setOpenModal }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Message submitted: ", message);
    setOpenModal(false);
  };

  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Chat</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Start chatting here! Type your message below.
          </p>
          <textarea
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-successGreen"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="success" onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
